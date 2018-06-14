$(document).ready(function () {
	
		var Feedback = {};
	
		var $window = $(window);
	
		var defaultFormValues = {
			email: "",
			inaccurateContent: false,
			inaccurateOutdatedContentText: "",
			otherMoreInformation: false,
			otherMoreInformationText: "",
			textErrors: false,
			typosLinksElementsText: "",
			outdatedSample: false,
			inaccurateOutdatedCodeSamplesText: "",
			otherFeedback: false,
			textFeedback: "",
			acceptFeedbackContact: false
		};

		var checkboxArea = $("#feedback-checkbox-area");

		checkboxArea.click(function () {
			checkboxArea.find("span.k-tooltip-validation").remove();
			checkboxArea.find("textarea").removeClass("k-invalid");
		});
	
		var formIsProcessing = false;
		//Util functions
		var generateUUID = function () {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
				return v.toString(16);
			});
		};
	
		var getCookieByName = function (name) {
			//This is very crude, but necessary because currently there is some kind of url rewriting going on
			//so the cookies are set for a base path but then additional navigation is done with url rewriting
			//so we set the cookie name as complete path to avoid a problem where the cookie is set for multiple pages.
			if (name === "yesNoFeedback") {
				name = currentPath;
			}
			var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
			if (match) return match[1];
		};
	
		//Init utility variables
		var rawLocationObject = $(location);
		var currentPath = rawLocationObject[0].origin + rawLocationObject[0].pathname;
		var popupNotification = $("#popupNotification").kendoNotification().data("kendoNotification");
		var formPopupNotification = $("#feedback-form-popup-container").kendoNotification({
			appendTo: "#feedback-form-window"
		}).data("kendoNotification");
	
		var setCookieByName = function (name, value) {
			var cookieUUID = getCookieByName("uuid");
			if (!cookieUUID) {
				document.cookie = "uuid=" + generateUUID() + "; path=/";
			}
			//This is very crude, but necessary because currently there is some kind of url rewriting going on
			//so the cookies are set for a base path but then additional navigation is done with url rewriting
			//so we set the cookie name as complete path to avoid a problem where the cookie is set for multiple pages.
			if (name === "yesNoFeedback") {
				name = currentPath;
			}
			document.cookie = name + "=" + value + ";";
		};
	
		//Feedback menu controls
		var feedbackButtonsContainer = $("#feedback-buttons-container");
		var feedbackSubmittedContainer = $("#feedback-submitted-container");
		var toggleFeedbackButtons = function (toggle) {
			if (toggle) {
				feedbackButtonsContainer.show();
				feedbackSubmittedContainer.hide();
			} else {
				feedbackButtonsContainer.hide();
				feedbackSubmittedContainer.show();
			}
		};
	
		if (getCookieByName("yesNoFeedback")) {
			toggleFeedbackButtons(false);
		} else {
			toggleFeedbackButtons(true);
		}
	
		//FORM
		//Init the form popup window
		var win = $("#feedback-form-window").kendoWindow({
			title: "Article feedback",
			actions: [],
			draggable: true,
			modal: true,
			pinned: false,
			visible: false,
			resizable: false,
			width: "700px"
		}).data("kendoWindow");
		//Init form
		var feedbackForm = $("#feedback-form");
		var formModel = kendo.observable(defaultFormValues);
		var isFormModelEmpty = function () {
			var isModelDefault = true;
			for (var key in defaultFormValues) {
				if (key === 'email') {
					continue;
				}
				var isValueEqual = formModel[key] === defaultFormValues[key];
				if (!isValueEqual) {
					isModelDefault = false;
					break;
				}
			}
			return isModelDefault;
		};
	
		var isFormModelSatisfied = function (key, formValue) {
			var value = formModel[key];
			if (value) {
				return formValue && formValue.length > 0;
			} else {
				return true;
			}
		};
		//Bind model to form
		kendo.bind($("div#feedback-form-window"), formModel);
		//Attach to form submit to adjust variables and send request
		var emptyFormValidator = checkboxArea.kendoValidator({
			validateOnBlur: false,
			messages: {
				// defines a message for the custom validation rule
				emptyForm: "You need to provide some feedback before submitting the form."
			},
			rules: {
				emptyForm: function (input) {
					return !isFormModelEmpty();
				}
			}
	
		}).data("kendoValidator");
	
		var emailValidator = $("#feedback-email-input").kendoValidator({
			validateOnBlur: false,
			messages: {
				email: "Invalid email address."
			},
			rules: {
				email: function (input) {
					if (input.val().length > 0) {
						var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
						return re.test(input.val());
					}
					return true;
				}
			}
		}).data("kendoValidator");

		var emailConsentValidator = $("#feedback-email-consent").kendoValidator({
			validateOnBlur: false,
			messages: {
				consent: "You have to agree first."
			},
			rules: {
				consent: function (input) {
					var email = formModel["email"];
					console.log("email: " + email + ", checked: ", formModel["acceptFeedbackContact"]);
					if (email.length > 0) {
						return formModel["acceptFeedbackContact"];
					}

					return true;
				}
			}
		}).data("kendoValidator");
	
		// text validation is disabled for the new design of the form. In order to enable it
		// it must be reworked!!!
		var textAreaValidator = function (selector, formModelKey) {
			return $(selector).kendoValidator({
				validateOnBlur: false,
				messages: {
					required: "Field should not be empty.",
					htmlValidation: "HTML tags are not allowed.",
					messageLength: "Message must not exceed 2500 characters.",
					whiteSpaces: "Using only whitespace is not allowed.",
					feedbackValidation: "Please select a category and provide some additional information."
				},
				rules: {
					emptyValidation: function (input) {
						var text = input.val();

						return isFormModelSatisfied(formModelKey, text);
					},
					htmlValidation: function (input) {
						var text = input.val();
						var matches = text.match(/(<([^>]+)>)/ig);

						return matches == null;
					},
					messageLength: function (input) {
						var text = input.val();

						return text.length <= 2500;
					},
					whiteSpaces: function (input) {
						var text = input.val();
						if (text.length > 0) {
							return $.trim(text) !== "";
						}
						return true;
					},
					feedbackValidation: function (input) {
						var text = input.val();
						if (text.length > 0) {
							return formModel[formModelKey];
						}
						return true;
					}
				}
			}).data("kendoValidator");
		};
	
		feedbackForm.submit(function (e) {
			e.preventDefault();
			//if form is processing do nothing.
			if (formIsProcessing) {
				return;
			}

			formIsProcessing = true;

			if(isFormModelEmpty()){
				formPopupNotification.show("Please provide some feedback before submitting the form.", "Error");
				formIsProcessing = false;
				return;
			}
	
			if ((!formModel.outdatedSample || (formModel.outdatedSample && textAreaValidator("#feedback-code-sample-text-input", "outdatedSample").validate())) &&
				(!formModel.otherMoreInformation || (formModel.otherMoreInformation && textAreaValidator("#feedback-more-information-text-input", "otherMoreInformation").validate())) &&
				(!formModel.textErrors || (formModel.textErrors && textAreaValidator("#feedback-text-errors-text-input", "textErrors").validate())) &&
				(!formModel.inaccurateContent || (formModel.inaccurateContent && textAreaValidator("#feedback-inaccurate-content-text-input", "inaccurateContent").validate())) &&
				(!formModel.otherFeedback || (formModel.otherFeedback && textAreaValidator("#feedback-other-text-input", "otherFeedback").validate())) &&
				emailValidator.validate() &&
				emailConsentValidator.validate()) {
				win.close();
				setCookieByName("submittingFeedback");
				formModel.yesNoFeedback = getCookieByName("yesNoFeedback") || "Not submitted";
				formModel.uuid = getCookieByName("uuid");
				formModel.path = currentPath;
				formModel.sheetId = $("#hidden-sheet-id").val();
				$.ajax({
                url: "https://baas.kinvey.com/rpc/kid_Hk57KwIFf/custom/saveFeedback",
                method: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(formModel),
                crossDomain: true,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", "Basic " + btoa("feedback:feedback"));
                },
                success: function (data) {
                    formIsProcessing = false;
                }
            });
        } else {
            formIsProcessing = false;
        }
		});
	
		//Attach to close button inside form window
		$("#form-close-button").click(function () {
			win.close();
		});
	
		//Attach to submit button inside form window
		$("#form-submit-button").click(function () {
			feedbackForm.submit();
		});
	
		//Init buttons
		$("#yesButton").click(function () {
			setCookieByName("yesNoFeedback", "Yes");
			toggleFeedbackButtons(false);
			Feedback.closeFeedback();
			Feedback.adjustNavigationPosition();
		});
		$("#noButton").click(function () {
			setCookieByName("yesNoFeedback", "No");
			toggleFeedbackButtons(false);
			Feedback.closeFeedback();
			Feedback.adjustNavigationPosition();
			win.center().open();
		});


		var windowHeight = $window.height();
		var headerHeight = $(".TK-Hat").outerHeight() + $(".ns-navigation").outerHeight();
		var footerHeight = $("#feedback-section").outerHeight() + $("footer").outerHeight();
		var articleHeight = windowHeight - (headerHeight + footerHeight);
		var feedbackOffsetTop = document.body.scrollHeight - footerHeight;
		var shouldOverlayFeedback = !getCookieByName("yesNoFeedback") && !getCookieByName("yesNoFeedbackClosed");
		var showingFeedbackBar = false;
		var scrollFold = $window.scrollTop() + windowHeight;
		var feedbackPinned = false;
	
		function updateVariables() {
			windowHeight = $window.height();
			headerHeight = $(".TK-Hat").outerHeight() + $(".ns-navigation").outerHeight();
			footerHeight = $("#feedback-section").outerHeight() + $("footer").outerHeight();
			articleHeight = windowHeight - (headerHeight + footerHeight);
			feedbackOffsetTop = document.body.scrollHeight - footerHeight;
			scrollFold = $window.scrollTop() + windowHeight;
		}
	
		Feedback = $.extend(Feedback, {
	
			init: function() {
	
				Feedback._events();
	
				Feedback.adjustArticleHeight();
				Feedback.adjustNavigationPosition();

				if (shouldOverlayFeedback) {
	
					showingFeedbackBar = true;
	
					window.setTimeout(function() {
						showingFeedbackBar = false;
						Feedback.toggleFeedback();
						Feedback.adjustNavigationPosition();
					}, 30000);
				}
	
			},
	
	
			// #region events
			_events: function() {
				$window.scroll(Feedback._window_scroll);
				$window.resize(Feedback._window_resize);
				$("#close-banner-button").click(Feedback._button_click);
			},
			_window_scroll: function() {
				updateVariables();
	
				scrollFold = $window.scrollTop() + windowHeight;
	
				Feedback.toggleFeedback();
				Feedback.adjustNavigationPosition();
			},
			_window_resize: function() {
				updateVariables();
	
				Feedback.adjustArticleHeight();
				Feedback.toggleFeedback();
				Feedback.adjustNavigationPosition();
			},
			_button_click: function() {
				Feedback.closeFeedback();
				Feedback.adjustNavigationPosition();
			},
			// #endregion
	
	
			// #region adjusters
			adjustNavigationPosition: function() {
				var bottom = 0;
	
				if (!window.matchMedia('(max-width: 1200px)').matches) {
					bottom = Math.max(feedbackPinned ? $("#feedback-section").outerHeight() : 0, scrollFold - feedbackOffsetTop );
				}
	
				$("#page-nav").css("bottom", bottom);
			},
			adjustArticleHeight: function() {
				$("#page-article").css("min-height", articleHeight);
			},
			toggleFeedback: function() {
				if (!shouldOverlayFeedback || showingFeedbackBar) {
					return;
				}

				if (scrollFold - $("#feedback-section").outerHeight() * 2 < feedbackOffsetTop) {
					Feedback.pinFeedback();
				}
				else {
					Feedback.unpinFeedback();
				}
			},
			// #endregion
	
	
			// #region feedback bar
			pinFeedback: function() {
				feedbackPinned = true;
				$("#feedback-section").addClass("-detached");
			},
			unpinFeedback: function() {
				feedbackPinned = false;
				$("#feedback-section").removeClass("-detached");
			},
			closeFeedback: function() {
				shouldOverlayFeedback = false;
				setCookieByName("yesNoFeedbackClosed");
				Feedback.unpinFeedback();
			}
			// #endregion
	
		});

		Feedback.init();
	
	});
