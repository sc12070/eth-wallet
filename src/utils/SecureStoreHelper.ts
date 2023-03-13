import RNSInfo from 'react-native-sensitive-info'

const sharedPreferencesName = 'ethWalletSharedPrefs'
const keychainService = 'ethwalletkcs'

const get = async (key: string) =>
  await RNSInfo.getItem(key, {
    sharedPreferencesName
  })

const getWithAuth = async (key: string) =>
  await RNSInfo.getItem(key, {
    sharedPreferencesName,
    keychainService,
    touchID: true,
    showModal: true,
    strings: {
      header: 'Sign in',
      description: 'We need your permission to retrieve login',
      hint: 'Touch',
      success: 'Fingerprint recognized',
      notRecognized: 'Fingerprint not recognized, try again',
      cancel: 'Cancel',
      cancelled: 'Authentication was cancelled'
    },
    kSecUseOperationPrompt: 'We need your permission to retrieve stock list'
  })

const save = async (key: string, value: string) =>
  await RNSInfo.setItem(key, value, {
    sharedPreferencesName,
    touchID: false,
    showModal: false
  })

const saveWithAuth = async (key: string, value: string) =>
  await RNSInfo.setItem(key, value, {
    sharedPreferencesName,
    keychainService,
    touchID: true,
    showModal: true,
    kSecAttrAccessible: 'kSecAttrAccessibleAfterFirstUnlock',
    kSecAccessControl: 'kSecAccessControlDevicePasscode'
  })

const remove = async (key: string) =>
  RNSInfo.deleteItem(key, {
    sharedPreferencesName,
    keychainService
  })

export default { get, getWithAuth, save, saveWithAuth, remove }
