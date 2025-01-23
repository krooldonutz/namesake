/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UnauthenticatedImport } from './routes/_unauthenticated'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as UnauthenticatedSigninImport } from './routes/_unauthenticated/signin'
import { Route as AuthenticatedHomeImport } from './routes/_authenticated/_home'
import { Route as AuthenticatedSettingsRouteImport } from './routes/_authenticated/settings/route'
import { Route as AuthenticatedSettingsIndexImport } from './routes/_authenticated/settings/index'
import { Route as AuthenticatedHomeIndexImport } from './routes/_authenticated/_home/index'
import { Route as AuthenticatedSettingsDataImport } from './routes/_authenticated/settings/data'
import { Route as AuthenticatedSettingsAccountImport } from './routes/_authenticated/settings/account'
import { Route as AuthenticatedHomeStateIdIndexImport } from './routes/_authenticated/_home/state-id.index'
import { Route as AuthenticatedHomeSocialSecurityIndexImport } from './routes/_authenticated/_home/social-security.index'
import { Route as AuthenticatedHomeQuestsIndexImport } from './routes/_authenticated/_home/quests.index'
import { Route as AuthenticatedHomePassportIndexImport } from './routes/_authenticated/_home/passport.index'
import { Route as AuthenticatedHomeCourtOrderIndexImport } from './routes/_authenticated/_home/court-order.index'
import { Route as AuthenticatedHomeBirthCertificateIndexImport } from './routes/_authenticated/_home/birth-certificate.index'
import { Route as AuthenticatedFormsCourtOrderMaImport } from './routes/_authenticated/forms/court-order/ma'
import { Route as AuthenticatedHomeStateIdJurisdictionImport } from './routes/_authenticated/_home/state-id.$jurisdiction'
import { Route as AuthenticatedHomeCourtOrderJurisdictionImport } from './routes/_authenticated/_home/court-order.$jurisdiction'
import { Route as AuthenticatedHomeBirthCertificateJurisdictionImport } from './routes/_authenticated/_home/birth-certificate.$jurisdiction'
import { Route as AuthenticatedHomeQuestsQuestIdIndexImport } from './routes/_authenticated/_home/quests.$questId.index'
import { Route as AuthenticatedHomeQuestsQuestIdEditIndexImport } from './routes/_authenticated/_home/quests.$questId.edit.index'

// Create/Update Routes

const UnauthenticatedRoute = UnauthenticatedImport.update({
  id: '/_unauthenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const UnauthenticatedSigninRoute = UnauthenticatedSigninImport.update({
  id: '/signin',
  path: '/signin',
  getParentRoute: () => UnauthenticatedRoute,
} as any)

const AuthenticatedHomeRoute = AuthenticatedHomeImport.update({
  id: '/_home',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedSettingsRouteRoute = AuthenticatedSettingsRouteImport.update(
  {
    id: '/settings',
    path: '/settings',
    getParentRoute: () => AuthenticatedRoute,
  } as any,
)

const AuthenticatedSettingsIndexRoute = AuthenticatedSettingsIndexImport.update(
  {
    id: '/',
    path: '/',
    getParentRoute: () => AuthenticatedSettingsRouteRoute,
  } as any,
)

const AuthenticatedHomeIndexRoute = AuthenticatedHomeIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthenticatedHomeRoute,
} as any)

const AuthenticatedSettingsDataRoute = AuthenticatedSettingsDataImport.update({
  id: '/data',
  path: '/data',
  getParentRoute: () => AuthenticatedSettingsRouteRoute,
} as any)

const AuthenticatedSettingsAccountRoute =
  AuthenticatedSettingsAccountImport.update({
    id: '/account',
    path: '/account',
    getParentRoute: () => AuthenticatedSettingsRouteRoute,
  } as any)

const AuthenticatedHomeStateIdIndexRoute =
  AuthenticatedHomeStateIdIndexImport.update({
    id: '/state-id/',
    path: '/state-id/',
    getParentRoute: () => AuthenticatedHomeRoute,
  } as any)

const AuthenticatedHomeSocialSecurityIndexRoute =
  AuthenticatedHomeSocialSecurityIndexImport.update({
    id: '/social-security/',
    path: '/social-security/',
    getParentRoute: () => AuthenticatedHomeRoute,
  } as any)

const AuthenticatedHomeQuestsIndexRoute =
  AuthenticatedHomeQuestsIndexImport.update({
    id: '/quests/',
    path: '/quests/',
    getParentRoute: () => AuthenticatedHomeRoute,
  } as any)

const AuthenticatedHomePassportIndexRoute =
  AuthenticatedHomePassportIndexImport.update({
    id: '/passport/',
    path: '/passport/',
    getParentRoute: () => AuthenticatedHomeRoute,
  } as any)

const AuthenticatedHomeCourtOrderIndexRoute =
  AuthenticatedHomeCourtOrderIndexImport.update({
    id: '/court-order/',
    path: '/court-order/',
    getParentRoute: () => AuthenticatedHomeRoute,
  } as any)

const AuthenticatedHomeBirthCertificateIndexRoute =
  AuthenticatedHomeBirthCertificateIndexImport.update({
    id: '/birth-certificate/',
    path: '/birth-certificate/',
    getParentRoute: () => AuthenticatedHomeRoute,
  } as any)

const AuthenticatedFormsCourtOrderMaRoute =
  AuthenticatedFormsCourtOrderMaImport.update({
    id: '/forms/court-order/ma',
    path: '/forms/court-order/ma',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedHomeStateIdJurisdictionRoute =
  AuthenticatedHomeStateIdJurisdictionImport.update({
    id: '/state-id/$jurisdiction',
    path: '/state-id/$jurisdiction',
    getParentRoute: () => AuthenticatedHomeRoute,
  } as any)

const AuthenticatedHomeCourtOrderJurisdictionRoute =
  AuthenticatedHomeCourtOrderJurisdictionImport.update({
    id: '/court-order/$jurisdiction',
    path: '/court-order/$jurisdiction',
    getParentRoute: () => AuthenticatedHomeRoute,
  } as any)

const AuthenticatedHomeBirthCertificateJurisdictionRoute =
  AuthenticatedHomeBirthCertificateJurisdictionImport.update({
    id: '/birth-certificate/$jurisdiction',
    path: '/birth-certificate/$jurisdiction',
    getParentRoute: () => AuthenticatedHomeRoute,
  } as any)

const AuthenticatedHomeQuestsQuestIdIndexRoute =
  AuthenticatedHomeQuestsQuestIdIndexImport.update({
    id: '/quests/$questId/',
    path: '/quests/$questId/',
    getParentRoute: () => AuthenticatedHomeRoute,
  } as any)

const AuthenticatedHomeQuestsQuestIdEditIndexRoute =
  AuthenticatedHomeQuestsQuestIdEditIndexImport.update({
    id: '/quests/$questId/edit/',
    path: '/quests/$questId/edit/',
    getParentRoute: () => AuthenticatedHomeRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_unauthenticated': {
      id: '/_unauthenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof UnauthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/settings': {
      id: '/_authenticated/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof AuthenticatedSettingsRouteImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/_home': {
      id: '/_authenticated/_home'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedHomeImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_unauthenticated/signin': {
      id: '/_unauthenticated/signin'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof UnauthenticatedSigninImport
      parentRoute: typeof UnauthenticatedImport
    }
    '/_authenticated/settings/account': {
      id: '/_authenticated/settings/account'
      path: '/account'
      fullPath: '/settings/account'
      preLoaderRoute: typeof AuthenticatedSettingsAccountImport
      parentRoute: typeof AuthenticatedSettingsRouteImport
    }
    '/_authenticated/settings/data': {
      id: '/_authenticated/settings/data'
      path: '/data'
      fullPath: '/settings/data'
      preLoaderRoute: typeof AuthenticatedSettingsDataImport
      parentRoute: typeof AuthenticatedSettingsRouteImport
    }
    '/_authenticated/_home/': {
      id: '/_authenticated/_home/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedHomeIndexImport
      parentRoute: typeof AuthenticatedHomeImport
    }
    '/_authenticated/settings/': {
      id: '/_authenticated/settings/'
      path: '/'
      fullPath: '/settings/'
      preLoaderRoute: typeof AuthenticatedSettingsIndexImport
      parentRoute: typeof AuthenticatedSettingsRouteImport
    }
    '/_authenticated/_home/birth-certificate/$jurisdiction': {
      id: '/_authenticated/_home/birth-certificate/$jurisdiction'
      path: '/birth-certificate/$jurisdiction'
      fullPath: '/birth-certificate/$jurisdiction'
      preLoaderRoute: typeof AuthenticatedHomeBirthCertificateJurisdictionImport
      parentRoute: typeof AuthenticatedHomeImport
    }
    '/_authenticated/_home/court-order/$jurisdiction': {
      id: '/_authenticated/_home/court-order/$jurisdiction'
      path: '/court-order/$jurisdiction'
      fullPath: '/court-order/$jurisdiction'
      preLoaderRoute: typeof AuthenticatedHomeCourtOrderJurisdictionImport
      parentRoute: typeof AuthenticatedHomeImport
    }
    '/_authenticated/_home/state-id/$jurisdiction': {
      id: '/_authenticated/_home/state-id/$jurisdiction'
      path: '/state-id/$jurisdiction'
      fullPath: '/state-id/$jurisdiction'
      preLoaderRoute: typeof AuthenticatedHomeStateIdJurisdictionImport
      parentRoute: typeof AuthenticatedHomeImport
    }
    '/_authenticated/forms/court-order/ma': {
      id: '/_authenticated/forms/court-order/ma'
      path: '/forms/court-order/ma'
      fullPath: '/forms/court-order/ma'
      preLoaderRoute: typeof AuthenticatedFormsCourtOrderMaImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/_home/birth-certificate/': {
      id: '/_authenticated/_home/birth-certificate/'
      path: '/birth-certificate'
      fullPath: '/birth-certificate'
      preLoaderRoute: typeof AuthenticatedHomeBirthCertificateIndexImport
      parentRoute: typeof AuthenticatedHomeImport
    }
    '/_authenticated/_home/court-order/': {
      id: '/_authenticated/_home/court-order/'
      path: '/court-order'
      fullPath: '/court-order'
      preLoaderRoute: typeof AuthenticatedHomeCourtOrderIndexImport
      parentRoute: typeof AuthenticatedHomeImport
    }
    '/_authenticated/_home/passport/': {
      id: '/_authenticated/_home/passport/'
      path: '/passport'
      fullPath: '/passport'
      preLoaderRoute: typeof AuthenticatedHomePassportIndexImport
      parentRoute: typeof AuthenticatedHomeImport
    }
    '/_authenticated/_home/quests/': {
      id: '/_authenticated/_home/quests/'
      path: '/quests'
      fullPath: '/quests'
      preLoaderRoute: typeof AuthenticatedHomeQuestsIndexImport
      parentRoute: typeof AuthenticatedHomeImport
    }
    '/_authenticated/_home/social-security/': {
      id: '/_authenticated/_home/social-security/'
      path: '/social-security'
      fullPath: '/social-security'
      preLoaderRoute: typeof AuthenticatedHomeSocialSecurityIndexImport
      parentRoute: typeof AuthenticatedHomeImport
    }
    '/_authenticated/_home/state-id/': {
      id: '/_authenticated/_home/state-id/'
      path: '/state-id'
      fullPath: '/state-id'
      preLoaderRoute: typeof AuthenticatedHomeStateIdIndexImport
      parentRoute: typeof AuthenticatedHomeImport
    }
    '/_authenticated/_home/quests/$questId/': {
      id: '/_authenticated/_home/quests/$questId/'
      path: '/quests/$questId'
      fullPath: '/quests/$questId'
      preLoaderRoute: typeof AuthenticatedHomeQuestsQuestIdIndexImport
      parentRoute: typeof AuthenticatedHomeImport
    }
    '/_authenticated/_home/quests/$questId/edit/': {
      id: '/_authenticated/_home/quests/$questId/edit/'
      path: '/quests/$questId/edit'
      fullPath: '/quests/$questId/edit'
      preLoaderRoute: typeof AuthenticatedHomeQuestsQuestIdEditIndexImport
      parentRoute: typeof AuthenticatedHomeImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedSettingsRouteRouteChildren {
  AuthenticatedSettingsAccountRoute: typeof AuthenticatedSettingsAccountRoute
  AuthenticatedSettingsDataRoute: typeof AuthenticatedSettingsDataRoute
  AuthenticatedSettingsIndexRoute: typeof AuthenticatedSettingsIndexRoute
}

const AuthenticatedSettingsRouteRouteChildren: AuthenticatedSettingsRouteRouteChildren =
  {
    AuthenticatedSettingsAccountRoute: AuthenticatedSettingsAccountRoute,
    AuthenticatedSettingsDataRoute: AuthenticatedSettingsDataRoute,
    AuthenticatedSettingsIndexRoute: AuthenticatedSettingsIndexRoute,
  }

const AuthenticatedSettingsRouteRouteWithChildren =
  AuthenticatedSettingsRouteRoute._addFileChildren(
    AuthenticatedSettingsRouteRouteChildren,
  )

interface AuthenticatedHomeRouteChildren {
  AuthenticatedHomeIndexRoute: typeof AuthenticatedHomeIndexRoute
  AuthenticatedHomeBirthCertificateJurisdictionRoute: typeof AuthenticatedHomeBirthCertificateJurisdictionRoute
  AuthenticatedHomeCourtOrderJurisdictionRoute: typeof AuthenticatedHomeCourtOrderJurisdictionRoute
  AuthenticatedHomeStateIdJurisdictionRoute: typeof AuthenticatedHomeStateIdJurisdictionRoute
  AuthenticatedHomeBirthCertificateIndexRoute: typeof AuthenticatedHomeBirthCertificateIndexRoute
  AuthenticatedHomeCourtOrderIndexRoute: typeof AuthenticatedHomeCourtOrderIndexRoute
  AuthenticatedHomePassportIndexRoute: typeof AuthenticatedHomePassportIndexRoute
  AuthenticatedHomeQuestsIndexRoute: typeof AuthenticatedHomeQuestsIndexRoute
  AuthenticatedHomeSocialSecurityIndexRoute: typeof AuthenticatedHomeSocialSecurityIndexRoute
  AuthenticatedHomeStateIdIndexRoute: typeof AuthenticatedHomeStateIdIndexRoute
  AuthenticatedHomeQuestsQuestIdIndexRoute: typeof AuthenticatedHomeQuestsQuestIdIndexRoute
  AuthenticatedHomeQuestsQuestIdEditIndexRoute: typeof AuthenticatedHomeQuestsQuestIdEditIndexRoute
}

const AuthenticatedHomeRouteChildren: AuthenticatedHomeRouteChildren = {
  AuthenticatedHomeIndexRoute: AuthenticatedHomeIndexRoute,
  AuthenticatedHomeBirthCertificateJurisdictionRoute:
    AuthenticatedHomeBirthCertificateJurisdictionRoute,
  AuthenticatedHomeCourtOrderJurisdictionRoute:
    AuthenticatedHomeCourtOrderJurisdictionRoute,
  AuthenticatedHomeStateIdJurisdictionRoute:
    AuthenticatedHomeStateIdJurisdictionRoute,
  AuthenticatedHomeBirthCertificateIndexRoute:
    AuthenticatedHomeBirthCertificateIndexRoute,
  AuthenticatedHomeCourtOrderIndexRoute: AuthenticatedHomeCourtOrderIndexRoute,
  AuthenticatedHomePassportIndexRoute: AuthenticatedHomePassportIndexRoute,
  AuthenticatedHomeQuestsIndexRoute: AuthenticatedHomeQuestsIndexRoute,
  AuthenticatedHomeSocialSecurityIndexRoute:
    AuthenticatedHomeSocialSecurityIndexRoute,
  AuthenticatedHomeStateIdIndexRoute: AuthenticatedHomeStateIdIndexRoute,
  AuthenticatedHomeQuestsQuestIdIndexRoute:
    AuthenticatedHomeQuestsQuestIdIndexRoute,
  AuthenticatedHomeQuestsQuestIdEditIndexRoute:
    AuthenticatedHomeQuestsQuestIdEditIndexRoute,
}

const AuthenticatedHomeRouteWithChildren =
  AuthenticatedHomeRoute._addFileChildren(AuthenticatedHomeRouteChildren)

interface AuthenticatedRouteChildren {
  AuthenticatedSettingsRouteRoute: typeof AuthenticatedSettingsRouteRouteWithChildren
  AuthenticatedHomeRoute: typeof AuthenticatedHomeRouteWithChildren
  AuthenticatedFormsCourtOrderMaRoute: typeof AuthenticatedFormsCourtOrderMaRoute
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedSettingsRouteRoute: AuthenticatedSettingsRouteRouteWithChildren,
  AuthenticatedHomeRoute: AuthenticatedHomeRouteWithChildren,
  AuthenticatedFormsCourtOrderMaRoute: AuthenticatedFormsCourtOrderMaRoute,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren,
)

interface UnauthenticatedRouteChildren {
  UnauthenticatedSigninRoute: typeof UnauthenticatedSigninRoute
}

const UnauthenticatedRouteChildren: UnauthenticatedRouteChildren = {
  UnauthenticatedSigninRoute: UnauthenticatedSigninRoute,
}

const UnauthenticatedRouteWithChildren = UnauthenticatedRoute._addFileChildren(
  UnauthenticatedRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof AuthenticatedHomeRouteWithChildren
  '/settings': typeof AuthenticatedSettingsRouteRouteWithChildren
  '/signin': typeof UnauthenticatedSigninRoute
  '/settings/account': typeof AuthenticatedSettingsAccountRoute
  '/settings/data': typeof AuthenticatedSettingsDataRoute
  '/': typeof AuthenticatedHomeIndexRoute
  '/settings/': typeof AuthenticatedSettingsIndexRoute
  '/birth-certificate/$jurisdiction': typeof AuthenticatedHomeBirthCertificateJurisdictionRoute
  '/court-order/$jurisdiction': typeof AuthenticatedHomeCourtOrderJurisdictionRoute
  '/state-id/$jurisdiction': typeof AuthenticatedHomeStateIdJurisdictionRoute
  '/forms/court-order/ma': typeof AuthenticatedFormsCourtOrderMaRoute
  '/birth-certificate': typeof AuthenticatedHomeBirthCertificateIndexRoute
  '/court-order': typeof AuthenticatedHomeCourtOrderIndexRoute
  '/passport': typeof AuthenticatedHomePassportIndexRoute
  '/quests': typeof AuthenticatedHomeQuestsIndexRoute
  '/social-security': typeof AuthenticatedHomeSocialSecurityIndexRoute
  '/state-id': typeof AuthenticatedHomeStateIdIndexRoute
  '/quests/$questId': typeof AuthenticatedHomeQuestsQuestIdIndexRoute
  '/quests/$questId/edit': typeof AuthenticatedHomeQuestsQuestIdEditIndexRoute
}

export interface FileRoutesByTo {
  '': typeof UnauthenticatedRouteWithChildren
  '/signin': typeof UnauthenticatedSigninRoute
  '/settings/account': typeof AuthenticatedSettingsAccountRoute
  '/settings/data': typeof AuthenticatedSettingsDataRoute
  '/': typeof AuthenticatedHomeIndexRoute
  '/settings': typeof AuthenticatedSettingsIndexRoute
  '/birth-certificate/$jurisdiction': typeof AuthenticatedHomeBirthCertificateJurisdictionRoute
  '/court-order/$jurisdiction': typeof AuthenticatedHomeCourtOrderJurisdictionRoute
  '/state-id/$jurisdiction': typeof AuthenticatedHomeStateIdJurisdictionRoute
  '/forms/court-order/ma': typeof AuthenticatedFormsCourtOrderMaRoute
  '/birth-certificate': typeof AuthenticatedHomeBirthCertificateIndexRoute
  '/court-order': typeof AuthenticatedHomeCourtOrderIndexRoute
  '/passport': typeof AuthenticatedHomePassportIndexRoute
  '/quests': typeof AuthenticatedHomeQuestsIndexRoute
  '/social-security': typeof AuthenticatedHomeSocialSecurityIndexRoute
  '/state-id': typeof AuthenticatedHomeStateIdIndexRoute
  '/quests/$questId': typeof AuthenticatedHomeQuestsQuestIdIndexRoute
  '/quests/$questId/edit': typeof AuthenticatedHomeQuestsQuestIdEditIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_authenticated': typeof AuthenticatedRouteWithChildren
  '/_unauthenticated': typeof UnauthenticatedRouteWithChildren
  '/_authenticated/settings': typeof AuthenticatedSettingsRouteRouteWithChildren
  '/_authenticated/_home': typeof AuthenticatedHomeRouteWithChildren
  '/_unauthenticated/signin': typeof UnauthenticatedSigninRoute
  '/_authenticated/settings/account': typeof AuthenticatedSettingsAccountRoute
  '/_authenticated/settings/data': typeof AuthenticatedSettingsDataRoute
  '/_authenticated/_home/': typeof AuthenticatedHomeIndexRoute
  '/_authenticated/settings/': typeof AuthenticatedSettingsIndexRoute
  '/_authenticated/_home/birth-certificate/$jurisdiction': typeof AuthenticatedHomeBirthCertificateJurisdictionRoute
  '/_authenticated/_home/court-order/$jurisdiction': typeof AuthenticatedHomeCourtOrderJurisdictionRoute
  '/_authenticated/_home/state-id/$jurisdiction': typeof AuthenticatedHomeStateIdJurisdictionRoute
  '/_authenticated/forms/court-order/ma': typeof AuthenticatedFormsCourtOrderMaRoute
  '/_authenticated/_home/birth-certificate/': typeof AuthenticatedHomeBirthCertificateIndexRoute
  '/_authenticated/_home/court-order/': typeof AuthenticatedHomeCourtOrderIndexRoute
  '/_authenticated/_home/passport/': typeof AuthenticatedHomePassportIndexRoute
  '/_authenticated/_home/quests/': typeof AuthenticatedHomeQuestsIndexRoute
  '/_authenticated/_home/social-security/': typeof AuthenticatedHomeSocialSecurityIndexRoute
  '/_authenticated/_home/state-id/': typeof AuthenticatedHomeStateIdIndexRoute
  '/_authenticated/_home/quests/$questId/': typeof AuthenticatedHomeQuestsQuestIdIndexRoute
  '/_authenticated/_home/quests/$questId/edit/': typeof AuthenticatedHomeQuestsQuestIdEditIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/settings'
    | '/signin'
    | '/settings/account'
    | '/settings/data'
    | '/'
    | '/settings/'
    | '/birth-certificate/$jurisdiction'
    | '/court-order/$jurisdiction'
    | '/state-id/$jurisdiction'
    | '/forms/court-order/ma'
    | '/birth-certificate'
    | '/court-order'
    | '/passport'
    | '/quests'
    | '/social-security'
    | '/state-id'
    | '/quests/$questId'
    | '/quests/$questId/edit'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/signin'
    | '/settings/account'
    | '/settings/data'
    | '/'
    | '/settings'
    | '/birth-certificate/$jurisdiction'
    | '/court-order/$jurisdiction'
    | '/state-id/$jurisdiction'
    | '/forms/court-order/ma'
    | '/birth-certificate'
    | '/court-order'
    | '/passport'
    | '/quests'
    | '/social-security'
    | '/state-id'
    | '/quests/$questId'
    | '/quests/$questId/edit'
  id:
    | '__root__'
    | '/_authenticated'
    | '/_unauthenticated'
    | '/_authenticated/settings'
    | '/_authenticated/_home'
    | '/_unauthenticated/signin'
    | '/_authenticated/settings/account'
    | '/_authenticated/settings/data'
    | '/_authenticated/_home/'
    | '/_authenticated/settings/'
    | '/_authenticated/_home/birth-certificate/$jurisdiction'
    | '/_authenticated/_home/court-order/$jurisdiction'
    | '/_authenticated/_home/state-id/$jurisdiction'
    | '/_authenticated/forms/court-order/ma'
    | '/_authenticated/_home/birth-certificate/'
    | '/_authenticated/_home/court-order/'
    | '/_authenticated/_home/passport/'
    | '/_authenticated/_home/quests/'
    | '/_authenticated/_home/social-security/'
    | '/_authenticated/_home/state-id/'
    | '/_authenticated/_home/quests/$questId/'
    | '/_authenticated/_home/quests/$questId/edit/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren
  UnauthenticatedRoute: typeof UnauthenticatedRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  UnauthenticatedRoute: UnauthenticatedRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authenticated",
        "/_unauthenticated"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/settings",
        "/_authenticated/_home",
        "/_authenticated/forms/court-order/ma"
      ]
    },
    "/_unauthenticated": {
      "filePath": "_unauthenticated.tsx",
      "children": [
        "/_unauthenticated/signin"
      ]
    },
    "/_authenticated/settings": {
      "filePath": "_authenticated/settings/route.tsx",
      "parent": "/_authenticated",
      "children": [
        "/_authenticated/settings/account",
        "/_authenticated/settings/data",
        "/_authenticated/settings/"
      ]
    },
    "/_authenticated/_home": {
      "filePath": "_authenticated/_home.tsx",
      "parent": "/_authenticated",
      "children": [
        "/_authenticated/_home/",
        "/_authenticated/_home/birth-certificate/$jurisdiction",
        "/_authenticated/_home/court-order/$jurisdiction",
        "/_authenticated/_home/state-id/$jurisdiction",
        "/_authenticated/_home/birth-certificate/",
        "/_authenticated/_home/court-order/",
        "/_authenticated/_home/passport/",
        "/_authenticated/_home/quests/",
        "/_authenticated/_home/social-security/",
        "/_authenticated/_home/state-id/",
        "/_authenticated/_home/quests/$questId/",
        "/_authenticated/_home/quests/$questId/edit/"
      ]
    },
    "/_unauthenticated/signin": {
      "filePath": "_unauthenticated/signin.tsx",
      "parent": "/_unauthenticated"
    },
    "/_authenticated/settings/account": {
      "filePath": "_authenticated/settings/account.tsx",
      "parent": "/_authenticated/settings"
    },
    "/_authenticated/settings/data": {
      "filePath": "_authenticated/settings/data.tsx",
      "parent": "/_authenticated/settings"
    },
    "/_authenticated/_home/": {
      "filePath": "_authenticated/_home/index.tsx",
      "parent": "/_authenticated/_home"
    },
    "/_authenticated/settings/": {
      "filePath": "_authenticated/settings/index.tsx",
      "parent": "/_authenticated/settings"
    },
    "/_authenticated/_home/birth-certificate/$jurisdiction": {
      "filePath": "_authenticated/_home/birth-certificate.$jurisdiction.tsx",
      "parent": "/_authenticated/_home"
    },
    "/_authenticated/_home/court-order/$jurisdiction": {
      "filePath": "_authenticated/_home/court-order.$jurisdiction.tsx",
      "parent": "/_authenticated/_home"
    },
    "/_authenticated/_home/state-id/$jurisdiction": {
      "filePath": "_authenticated/_home/state-id.$jurisdiction.tsx",
      "parent": "/_authenticated/_home"
    },
    "/_authenticated/forms/court-order/ma": {
      "filePath": "_authenticated/forms/court-order/ma.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/_home/birth-certificate/": {
      "filePath": "_authenticated/_home/birth-certificate.index.tsx",
      "parent": "/_authenticated/_home"
    },
    "/_authenticated/_home/court-order/": {
      "filePath": "_authenticated/_home/court-order.index.tsx",
      "parent": "/_authenticated/_home"
    },
    "/_authenticated/_home/passport/": {
      "filePath": "_authenticated/_home/passport.index.tsx",
      "parent": "/_authenticated/_home"
    },
    "/_authenticated/_home/quests/": {
      "filePath": "_authenticated/_home/quests.index.tsx",
      "parent": "/_authenticated/_home"
    },
    "/_authenticated/_home/social-security/": {
      "filePath": "_authenticated/_home/social-security.index.tsx",
      "parent": "/_authenticated/_home"
    },
    "/_authenticated/_home/state-id/": {
      "filePath": "_authenticated/_home/state-id.index.tsx",
      "parent": "/_authenticated/_home"
    },
    "/_authenticated/_home/quests/$questId/": {
      "filePath": "_authenticated/_home/quests.$questId.index.tsx",
      "parent": "/_authenticated/_home"
    },
    "/_authenticated/_home/quests/$questId/edit/": {
      "filePath": "_authenticated/_home/quests.$questId.edit.index.tsx",
      "parent": "/_authenticated/_home"
    }
  }
}
ROUTE_MANIFEST_END */
