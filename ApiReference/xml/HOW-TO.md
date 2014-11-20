---
nav-title: "xml How-To"
title: "xml How-To"
description: "Examples for using xml"
---
# Xml module
Using xml requires the Xml module.
``` JavaScript
var xmlModule = require("xml");
```
### Parse XML
``` JavaScript
var onEventCallback = function (event) {
    switch (event.eventType) {
        case xmlModule.ParserEventType.StartElement:
            var message = event.eventType + " " + event.elementName;
            if (event.attributes) {
                message += ", Attributes:";
                for (var attributeName in event.attributes) {
                    if (event.attributes.hasOwnProperty(attributeName)) {
                        message += " " + attributeName + "=\"" + event.attributes[attributeName] + "\"";
                    }
                }
            }
            break;
        case xmlModule.ParserEventType.EndElement:
            break;
        case xmlModule.ParserEventType.Text:
            var significantText = event.data.trim();
            if (significantText !== "") {
            }
            break;
    }
};
var onErrorCallback = function (error) {
    console.log("Error: " + error.message);
};
var xmlParser = new xmlModule.XmlParser(onEventCallback, onErrorCallback);
xmlParser.parse("<Document><First attr1=\"attribute1\" attr2=\"attribute2\">I am first</First><Second>I am second</Second></Document>");
```
Calling parse will produce the following console output:
StartElement Document
StartElement First, Attributes: attr1 = "attribute1" attr2 = "attribute2"
Text = "I am first"
EndElement First
StartElement Second
Text = "I am second"
EndElement Second
EndElement Document
