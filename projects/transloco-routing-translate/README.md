**‼️‼️‼️ The library is in an early development stage, so not recommended using in production for now ‼️‼️‼️**

# Transloco Routing Translate
 
The library makes prefixes in url for all langs used with @ngneat/transloco

## Installation
#### 1. Get the package:
`npm install transloco-routing-translate`

#### 2. Import the library in a AppModule:

```
imports: [
  ...
  AppRoutingModule,
  TranslocoRoutingTranslateModule.forRoot({defaultLangPrefix: true}),
]
```
#### 3. Pass configuration object to forRoot() method:

+ `defaultLangPrefix: boolean` - if `false` prefix will not be created for default language.
+ `exludedPaths: string[]` - array of paths that should be not prefixed
