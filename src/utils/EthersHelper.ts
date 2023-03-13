import { projectId } from 'constants/KEYS'
import { ethers } from 'ethers'
import AsyncStorageHelper from './AsyncStorageHelper'
import SecureStoreHelper from './SecureStoreHelper'

export const recoveryByTwelveWord = async (words: string) => {
  try {
    const provider = new ethers.providers.InfuraProvider('mainnet', projectId)
    const wallet = ethers.Wallet.fromMnemonic(words)
    const connectedWallet = wallet.connect(provider)
    return connectedWallet
  } catch (error) {
    console.warn('EthersHelper.recoveryByTwelveWord failed', error)
    return null
  }
}

export const connectWithPrivateKey = async (privateKey: string) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${projectId}`
    )
    const wallet = new ethers.Wallet(privateKey, provider)
    const connectedWallet = wallet.connect(provider)
    return connectedWallet
  } catch (error) {
    console.warn('EthersHelper.connectWithPrivateKey failed', error)
    return null
  }
}

export const savePrivateKey = async (privateKey: string) => {
  try {
    await SecureStoreHelper.saveWithAuth('privateKey', privateKey)
    await AsyncStorageHelper.save('isLogined', 'Y')
    return true
  } catch (error) {
    console.warn('EthersHelper.savePrivateKey failed', error)
    return false
  }
}

export const removePrivateKey = async () => {
  try {
    await SecureStoreHelper.remove('privateKey')
    await AsyncStorageHelper.remove('isLogined')
    return true
  } catch (error) {
    console.warn('EthersHelper.removePrivateKey failed', error)
    return false
  }
}
