{% set data = load_data(path="content/tutorials/python/codeblocks.json") %}
```{% if lc %}{{ lc }}{% endif %}
{{ data[fn] | safe }}
```
