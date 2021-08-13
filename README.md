# Introduction 
SIPSTACK main www website.

## How to use Alerts
Before adding your alert to your page, you must set the **redirect link**:
1. Navigate to src/js/custom/banner-ad.js
2. Modify the link on line 8 to suit your needs, for example if you wanted to redirect to the Google website, your line 8 should look something like this:
`window.open("https://google.com/").focus();`

After setting your redirect link accordingly, you must add the banner-ad component to the relevant page(s):
1. Open the relevant html file.
2. Add the banner-ad html block to the top of the header: 
```html
    <div id="banner-container">
		<div id="banner-description">Lorem ipsum dolor sit amet.</div>
		<button id="banner-btn">x</button>
	</div>
```
3. Update the description to suit your message (optionally, you may update the button contents if desired).