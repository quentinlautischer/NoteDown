const parser = require('../../shared/parser.js');

test('table test 1 - one row - right align', () => {
  var raw_str = 
"| Table | Table1 |\n\
|------:|-------:|\n\
|Stuff  | stuff  |\n";

  var rendered =  
'<table>\
<thead>\
<tr>\
<th style="text-align: right;">Table</th>\
<th style="text-align: right;">Table1</th>\
</tr>\
</thead>\
<tbody>\
<tr>\
<td style="text-align: right;">Stuff</td>\
<td style="text-align: right;">stuff</td>\
</tr>\
</tbody>\
</table>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('table test 2 - two row left align', () => {
  var raw_str = 
"| Table | Table1 |\n\
|:------|:-------|\n\
|Stuff  | stuff  |\n\
|Stuff  | stuff  |\n";

  var rendered =  
'<table>\
<thead>\
<tr>\
<th style="text-align: left;">Table</th>\
<th style="text-align: left;">Table1</th>\
</tr>\
</thead>\
<tbody>\
<tr>\
<td style="text-align: left;">Stuff</td>\
<td style="text-align: left;">stuff</td>\
</tr>\
<tr>\
<td style="text-align: left;">Stuff</td>\
<td style="text-align: left;">stuff</td>\
</tr>\
</tbody>\
</table>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('table test 3 - two row two col center align', () => {
  var raw_str = 
"| Table | Table1 | Table2 |\n\
|:-----:|:------:|:------:|\n\
|Stuff  | stuff  | stuff  |\n\
|Stuff  | stuff  | stuff  |\n";

  var rendered =  
'<table>\
<thead>\
<tr>\
<th style="text-align: center;">Table</th>\
<th style="text-align: center;">Table1</th>\
<th style="text-align: center;">Table2</th>\
</tr>\
</thead>\
<tbody>\
<tr>\
<td style="text-align: center;">Stuff</td>\
<td style="text-align: center;">stuff</td>\
<td style="text-align: center;">stuff</td>\
</tr>\
<tr>\
<td style="text-align: center;">Stuff</td>\
<td style="text-align: center;">stuff</td>\
<td style="text-align: center;">stuff</td>\
</tr>\
</tbody>\
</table>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('table test 4 - two row two col no align', () => {
  var raw_str = 
"| Table | Table1 | Table2 |\n\
|-------|--------|--------|\n\
|Stuff  | stuff  | stuff  |\n\
|Stuff  | stuff  | stuff  |\n\
|Stuff  | stuff  | stuff  |\n";

  var rendered =  
'<table>\
<thead>\
<tr>\
<th>Table</th>\
<th>Table1</th>\
<th>Table2</th>\
</tr>\
</thead>\
<tbody>\
<tr>\
<td>Stuff</td>\
<td>stuff</td>\
<td>stuff</td>\
</tr>\
<tr>\
<td>Stuff</td>\
<td>stuff</td>\
<td>stuff</td>\
</tr>\
<tr>\
<td>Stuff</td>\
<td>stuff</td>\
<td>stuff</td>\
</tr>\
</tbody>\
</table>';

  expect(parser.parse(raw_str)).toBe(rendered);
});

test('table test 5 - nested span parsing', () => {
  var raw_str = 
"| Table | Table1 |\n\
|-------|--------|\n\
|*Stuff*  | __stuff__  |\n\
|[Stuff](url) | `stuff` |\n"

  var rendered =  
'<table>\
<thead>\
<tr>\
<th>Table</th>\
<th>Table1</th>\
</tr>\
</thead>\
<tbody>\
<tr>\
<td><em>Stuff</em></td>\
<td><strong>stuff</strong></td>\
</tr>\
<tr>\
<td><a href="url">Stuff</a></td>\
<td><code>stuff</code></td>\
</tr>\
</tbody>\
</table>';

  expect(parser.parse(raw_str)).toBe(rendered);
});
