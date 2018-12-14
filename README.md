# JSON Lines filter

Filters [JSON Lines](http://jsonlines.org/) input using JavaScript.

The only argument to this tool is a predicate where `it` indicates parsed JSON line. If the predicate returns `true` the line is printed as is otherwise it is silently discarded.

Example:

```
$ cat file.jsonl
{"size":4}
{"size":5}
{"size":6}

$ cat file.jsonl | npx jq-filter 'it.size > 5'
{"size":6}
```
