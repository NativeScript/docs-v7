---
nav-title: "V8 Flags"
title: "V8 Flags"
description: "Tuning with V8 flags"
position: 5
---

# Tuning V8

V8 comes with a set of controlling flags that may be useful for a fine-grained tuning. Currently, we use `--expose_gc` flag to expose global `gc()` function which comes handy in advanced memory management scenarios. You can set these flags in `package.json` configuration file.

```JSON
{
	...
	"android": {
		"v8Flags": "--expose_gc"
	}
	...
}
```

For example, here are all the flags in V8 `5.5.372` [https://github.com/v8/v8/blob/5.5.372/src/flag-definitions.h](https://github.com/v8/v8/blob/5.5.372/src/flag-definitions.h)
