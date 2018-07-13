# i18next

developed by the community not a big company. 所以有對不同版本出相對應的 library，像是 vue, react, angular...

## Example

```javascript
<script type="text/javascript" src="../assets/js/core/libraries/jquery-2.2.4.min.js"></script>
<script type="text/javascript" src="../assets/js/plugins/internationalization/i18next.min-v3.3.1.js"></script>
<script type="text/javascript" src="../assets/js/plugins/internationalization/jquery-i18next.js"></script>
<script type="text/javascript" src="../assets/js/plugins/internationalization/i18nextXHRBackend.min.js"></script>
<script type="text/javascript" src="../assets/js/plugins/internationalization/i18nextBrowserLanguageDetector.min.js"></script>
<script type="text/javascript" src="../assets/js/plugins/internationalization/i18nextLocalStorageCache.min.js"></script>
<script type="text/javascript" src="../assets/js/plugins/internationalization/i18nextIntervalPluralPostProcessor.min.js"></script>

$(function(){
    // i18next Configuration
    // -------------------------
var namespaces = ["nameSpace1" ,"NameSpace2" ],
    cacheOptions = {
        // turn on or off
        enabled: true, // prefix for stored languages
        prefix: 'i18next_res_',
        expirationTime: 1*24*60*60*1000 // expiration
    },
    lngDetectionOption = {
        //order and from where user language should be detected
        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
        //keys or params to lookup language from
        lookupQuerystring: 'lng',
        lookupCookie: 'i18next',
        lookupLocalStorage: 'i18nextLocalStorage',
        //cache user language on
        caches: ['localStorage','cookie'],
        // optional expire and domain for set cookie
        cookieMinutes: 365*24*60, // 1 year
        cookieDomain: 'myDomain',
        // optional htmlTag with lang attribute, the default is:
        htmlTag: document.documentElement
    },
    i18nextoptions = {
        compatibilityJSON: 'v2',
        debug: true,
        whitelist : ['en','es', 'de', 'fr'],
        ns: namespaces,
        load: 'unspecific',
        fallbackLng : 'en',
        detection: lngDetectionOption,
        backend: {loadPath: '../assets/locales/{{ns}}/{{lng}}.json'},
        //cache : cacheOptions
    };

i18next
    .use(i18nextBrowserLanguageDetector)
    .use(i18nextXHRBackend)
    .use(Cache)
    .use(i18nextIntervalPluralPostProcessor)
    .init(i18nextoptions, function (err, t) {
        var options = $().jqueryI18nextOptions;
        //init jquery-i18next
        jqueryI18next.init(i18next, $,options);

        $('body').i18n(); // Init 18n

    })
})
```

