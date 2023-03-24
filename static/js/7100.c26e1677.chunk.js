"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[7100],{17100:function(e,n,a){a.r(n);var t=a(98655),o=a(61113),s=a(46417);n.default=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{variant:"h4",className:"mb-40 font-700",children:"Multi Language"}),(0,s.jsxs)(o.Z,{className:"mb-16",component:"p",children:["Fuse React uses"," ",(0,s.jsx)("a",{href:"https://react.i18next.com/",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("code",{children:"react-i18next"})})," ","for to support multiple languages."]}),(0,s.jsx)(o.Z,{className:"mb-16 p-16 border-1 bg-yellow-50 rounded-16 text-gray-800",component:"p",children:"Since not everybody need multi-language setup for their apps, we decided NOT to put translations everywhere. If you want to see the translations in action, visit the Mail app, and then change the language from the Toolbar. Mail app is the only app that has translations for demonstration purposes. You can look at its source code to see the usage."}),(0,s.jsx)(o.Z,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Usage"}),(0,s.jsxs)(o.Z,{className:"mb-16",component:"p",children:["In order to use the translations, create your translation file within the folder you want to use the translations. For example, for the Mail app, create ",(0,s.jsx)("code",{children:"i18n/en.js"})," file inside the",(0,s.jsx)("code",{children:"apps/mail"})," folder."]}),(0,s.jsx)(t.Z,{component:"pre",className:"language-jsx mb-24",children:a(97287)}),(0,s.jsxs)(o.Z,{className:"mb-16",component:"p",children:["And register the language file with ",(0,s.jsx)("code",{children:"i18next.addResourceBundle()"})," at",(0,s.jsx)("code",{children:"src/app/main/react-fuse-playground/apps/mailbox/MailboxAppConfig.js"})]}),(0,s.jsx)(t.Z,{component:"pre",className:"language-jsx mb-24",children:a(40912)}),(0,s.jsxs)(o.Z,{className:"mb-16",component:"p",children:["And use in a component with ",(0,s.jsx)("code",{children:"useTranslation"})," hook as below:"]}),(0,s.jsx)(t.Z,{component:"pre",className:"language-jsx mb-24",children:'\n                        import {useTranslation} from \'react-i18next\';\n\n                        const {t} = useTranslation(\'mailApp\');\n                    \n                        return (\n                            <div className="p-24">\n                                <Button\n                                    variant="contained"\n                                    color="primary"\n                                    className="w-full"\n                                    onClick={handleOpenDialog}\n                                >\n                                    {t(\'COMPOSE\')}\n                                </Button>\n                        '}),(0,s.jsx)(o.Z,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Default Language"}),(0,s.jsxs)(o.Z,{className:"mb-16",component:"p",children:["To change the default language of the Fuse React, you need to change ",(0,s.jsx)("code",{children:"lng"})," ","setting in the file ",(0,s.jsx)("code",{children:"src/i18n.js"})]}),(0,s.jsx)(o.Z,{className:"mb-16",component:"p",children:'You can change "eng" value to "ar" to test it out.'}),(0,s.jsx)(t.Z,{component:"pre",className:"language-jsx mb-24",children:a(50763)}),(0,s.jsx)(o.Z,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Changing Language"}),(0,s.jsxs)(o.Z,{className:"mb-16",component:"p",children:["You should use ",(0,s.jsx)("code",{children:"changeLanguage"})," redux action to change language dynamically:"]}),(0,s.jsx)(t.Z,{component:"pre",className:"language-jsx mb-24",children:"\n                           import { changeLanguage } from 'app/store/i18nSlice';\n\n                            .\n                            .\n\n                            dispatch(changeLanguage(lng.id));\n                        "}),(0,s.jsxs)(o.Z,{className:"mb-16",component:"p",children:["Checkout example usage at",(0,s.jsx)("code",{children:"app/theme-layouts/shared-components/LanguageSwitcher.js"})]})]})}},40912:function(e,n,a){a.r(n),n.default="import i18next from 'i18next';\nimport { lazy } from 'react';\nimport { Navigate } from 'react-router-dom';\nimport ar from './i18n/ar';\nimport en from './i18n/en';\nimport tr from './i18n/tr';\nimport SelectMailMessage from './SelectMailMessage';\nimport MailDetails from './mail/MailDetails';\n\nconst MailboxApp = lazy(() => import('./MailboxApp'));\n\ni18next.addResourceBundle('en', 'mailboxApp', en);\ni18next.addResourceBundle('tr', 'mailboxApp', tr);\ni18next.addResourceBundle('ar', 'mailboxApp', ar);\n\nconst MailboxAppConfig = {\n  settings: {\n    layout: {},\n  },\n  routes: [\n    {\n      path: '/react-fuse-playground/apps/mailbox',\n      children: [\n        {\n          path: '',\n          element: <Navigate to=\"/react-fuse-playground/apps/mailbox/inbox\" />,\n        },\n        {\n          path: ':folderHandle',\n          element: <MailboxApp />,\n          children: [\n            { path: '', element: <SelectMailMessage /> },\n            { path: ':mailId', element: <MailDetails /> },\n          ],\n        },\n        {\n          path: 'label/:labelHandle',\n          element: <MailboxApp />,\n          children: [\n            { path: '', element: <SelectMailMessage /> },\n            { path: ':mailId', element: <MailDetails /> },\n          ],\n        },\n        {\n          path: 'filter/:filterHandle',\n          element: <MailboxApp />,\n          children: [\n            { path: '', element: <SelectMailMessage /> },\n            { path: ':mailId', element: <MailDetails /> },\n          ],\n        },\n      ],\n    },\n  ],\n};\n\nexport default MailboxAppConfig;\n"},97287:function(e,n,a){a.r(n),n.default="const locale = {\n  APP_TITLE: 'Mailbox',\n  COMPOSE: 'Compose',\n  FOLDERS: 'Mailboxes',\n  FILTERS: 'Filters',\n  LABELS: 'Labels',\n  NO_MESSAGES: 'There are no messages!',\n  SEARCH_PLACEHOLDER: 'Search for an e-mail or task',\n  INBOX: 'Inbox',\n  SENT: 'Sent',\n  DRAFTS: 'Drafts',\n  SPAM: 'Spam',\n  TRASH: 'Trash',\n  STARRED: 'Starred',\n  IMPORTANT: 'Important',\n};\n\nexport default locale;\n"},50763:function(e,n,a){a.r(n),n.default="import i18n from 'i18next';\nimport { initReactI18next } from 'react-i18next';\n\n// the translations\n// (tip move them in a JSON file and import them)\nconst resources = {\n  en: {\n    translation: {\n      'Welcome to React': 'Welcome to React and react-i18next',\n    },\n  },\n};\n\ni18n\n  .use(initReactI18next) // passes i18n down to react-i18next\n  .init({\n    resources,\n    lng: 'en',\n\n    keySeparator: false, // we do not use keys in form messages.welcome\n\n    interpolation: {\n      escapeValue: false, // react already safes from xss\n    },\n  });\n\nexport default i18n;\n"}}]);
