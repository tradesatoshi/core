const handler = require('../../../lib/handlers/transactions/multi-signature')
const WalletModel = require('../../../lib/models/wallet')

let wallet
let transaction

const multisignatureTest = {
  min: 15,
  lifetime: 72,
  keysgroup: [
    '034a7aca6841cfbdc688f09d55345f21c7ffbd1844693fa68d607fc94f729cbbea',
    '02fd6743ddfdc7c5bac24145e449c2e4f2d569b5297dd7bf088c3bc219f582a2f0',
    '02f9c51812f4be127b9f1f21cb4e146eca6aecc85739a243db0f1064981deda216',
    '0214d60ca95cd87a097ed6e6e42281acb68ae1815c8f494b8ff18d24dc9e072171',
    '02a14634e04e80b05acd56bc361af98498d76fbf5233f8d62773ceaa07172ddaa6',
    '021a9ba0e72f02b8fa7bad386582ec1d6c05b7664c892bf2a86035a85350f37203',
    '02e3ba373c6c352316b748e75358ead36504b0ef5139d215fb6a83a330c4eb60d5',
    '0309039bfa18d6fd790edb79438783b27fbcab06040a2fdaa66fb81ad53ca8db5f',
    '0393d12aff5962fa9065487959719a81c5d991e7c48a823039acd9254c2b673841',
    '03d3265264f06fe1dd752798403a73e537eb461fc729c83a84b579e8434adfe7c4',
    '02acfa496a6c12cb9acc3219993b17c62d19f4b570996c12a37d6e89eaa9716859',
    '03136f2101f1767b0d63d9545410bcaf3a941b2b6f06851093f3c679e0d31ca1cd',
    '02e6ec3941be86177bf0b998589c07da1b73e990466fdaee347c972c10f61b3797',
    '037dcd05d921a9f2ddd11960fec2ea9904fc55cad030549a6c5f5a41b2e35e56d2',
    '03206f7ae26f14cffb62b8c28b5e632952cdeb84b7c74ac0c2198b08bd84ee4f23'
  ]
}

beforeEach(() => {
  wallet = new WalletModel('D61xc3yoBQDitwjqUspMPx1ooET6r1XLt7')
  wallet.balance = 100390000000
  wallet.publicKey = '02337316a26d8d49ec27059bd0589c49ba474029c3627715380f4df83fb431aece'
  wallet.secondPublicKey = '020d3c837d0a47ee7de1082cd48885003c5e92964e58bb34af3b58c6e42208ae03'
  wallet.multisignature = multisignatureTest

  transaction = {
    version: 1,
    id: '95199581d640eda97ea810fc3248e34f6e5ab1d8c9802e64a50b930f4ff044ab',
    blockid: '9156936215323004070',
    type: 4,
    timestamp: 25921690,
    amount: 0,
    fee: 9000000000,
    vendorField: 'wl8lwts8je',
    senderId: 'D61xc3yoBQDitwjqUspMPx1ooET6r1XLt7',
    recipientId: 'D61xc3yoBQDitwjqUspMPx1ooET6r1XLt7',
    senderPublicKey: '02337316a26d8d49ec27059bd0589c49ba474029c3627715380f4df83fb431aece',
    signature: '3045022100c59d8efdd95010b0368963e492e8f7da1a3f6993b0723724f84aeccf658ea9a30220103d2b4ac07ad808b4ea79829a0081992586c6ef73892cfa7510ab37f0093bcd', // eslint-disable-line max-len
    signSignature: '3044022059ab88d3fe83d6b52ddd5e863696416168f9cac6de962368587ad7343542f99f02207a95ca473006ab57dee6b06e06f8fa8f1b260548b9226614a0e1f760cc910479', // eslint-disable-line max-len
    signatures: [
      '3045022100e9d0015e6e50e4852ad057ae6f83d0bf3e28fd722d1acf58f1a069a8f5043cf002201ee5b35b7f61af853802020fecf629ab59309c09d7e002b20636bdbb26ea92e3', // eslint-disable-line max-len
      '3044022042c796e7f447462e60dfeeb8233d5fde3026e9c0aeda4544ae47995694d815a802204a183ae7d885fd875f6795d047364a73802c0d967d32cd797ee765ac10715f2d', // eslint-disable-line max-len
      '30450221008a000e62a63298f401c616ae7222df9c187c92906736c0f879ba1162647e25c00220612cf87641075334b37f6e19590fcb45f9941aa50092fd429eda375caf5b8144', // eslint-disable-line max-len
      '3045022100bd5ee0064df149406c7b4a64116c913181d7527a078972591280305b14686232022039e7437629b935ac39e2f547cbf191ffad4ab83805a360f50b49176dd5d604cc', // eslint-disable-line max-len
      '30440220133a8dde6d87bcc8f627a57e7a1ad8a1f441d77246dee9d9d999851b4aeecbf102205c93de5881e6fd8ce808552b2ee91c6e144a734a9ef8640e0ca055904d5e5bd1', // eslint-disable-line max-len
      '3045022100bb9de3351337532b42598a4bccba2f07a5a1dbbb23859094dd90eafa409c7bf3022071ff0989dc6f9c95b95784d3aa3386940a46372d3fb50b7f4e9d6372b0d3b73d', // eslint-disable-line max-len
      '3044022075e2e0137f1567b7efeac40faf5b8d55ef32540c7d3931c27ae45748241a118e02203cbf5c251eec1e2c033b556315069bcc4f04960bfc705db6288530de28211fc9', // eslint-disable-line max-len
      '30440220259d5ed227ec1cd6275f6e7c6dd299f73500f8b4aa21025296c87419e91e5900022045a70031c442c336f2b280a94e7058976c7f8ae6617fd4fbf41b913ac608c54a', // eslint-disable-line max-len
      '3045022100f8537736fb7e25e9ccb4e5d6f3cf7f053d45dc7ff7d41914e4ab9f7b48b9347502204a46de5fd0cc03e2e1a559bc5ffc25a1fce5dc05d5f6f1794a0f3b9f38ebe406', // eslint-disable-line max-len
      '3045022100d361e24290fddf2ad194c9a29200d88ccae83afc0f930e5fd5b2ecefcd2cebf3022065049135ced0fe238270511a748ba82be72f6298e2895d8b20680698bbc03ef5', // eslint-disable-line max-len
      '30440220556b517965101ef1e0cf59eead99b802b053ac4a631111348d961df29952f2150220630ca079a5647d7d1f22b6f253d58b1f7fb128be9aeb33c9c1fdf53948e52db4', // eslint-disable-line max-len
      '3044022047838187fcd1c79059ab53769678940e634400cf7431337a7e27e30bc17ac39702200d2cb974f44239b0edbb7c10096d5d7b682d0788dc3f8d0f5061373f4eefdff8', // eslint-disable-line max-len
      '3044022057bbd8432154bf72244f987c5b4c49ba094a0e4abffc3644ba91c5ce1b79712a0220708a2743d4b4ab1d9379bcd60acf70b63e16cd24b95cd142a0b3ced0d43e6cb8', // eslint-disable-line max-len
      '304502210097e1a36e47422455f030fa5f79153a4c49d25a2fb487837462b7f9d0fa3bd436022008a212ce0dfa18543987a1381b1261652d76e49f923e0b2ac79073b22367b3a5', // eslint-disable-line max-len
      '304402201cbe68b0383c243cf61a9af9a42746688b85f6ee106815906d9d8c4d717837aa022038c1eb4e06b90e24b44903de18c3f260e8be945b84126c9a048794f830b9f272' // eslint-disable-line max-len
    ],
    asset: {
      multisignature: {
        min: 15,
        lifetime: 72,
        keysgroup: [
          '+034a7aca6841cfbdc688f09d55345f21c7ffbd1844693fa68d607fc94f729cbbea',
          '+02fd6743ddfdc7c5bac24145e449c2e4f2d569b5297dd7bf088c3bc219f582a2f0',
          '+02f9c51812f4be127b9f1f21cb4e146eca6aecc85739a243db0f1064981deda216',
          '+0214d60ca95cd87a097ed6e6e42281acb68ae1815c8f494b8ff18d24dc9e072171',
          '+02a14634e04e80b05acd56bc361af98498d76fbf5233f8d62773ceaa07172ddaa6',
          '+021a9ba0e72f02b8fa7bad386582ec1d6c05b7664c892bf2a86035a85350f37203',
          '+02e3ba373c6c352316b748e75358ead36504b0ef5139d215fb6a83a330c4eb60d5',
          '+0309039bfa18d6fd790edb79438783b27fbcab06040a2fdaa66fb81ad53ca8db5f',
          '+0393d12aff5962fa9065487959719a81c5d991e7c48a823039acd9254c2b673841',
          '+03d3265264f06fe1dd752798403a73e537eb461fc729c83a84b579e8434adfe7c4',
          '+02acfa496a6c12cb9acc3219993b17c62d19f4b570996c12a37d6e89eaa9716859',
          '+03136f2101f1767b0d63d9545410bcaf3a941b2b6f06851093f3c679e0d31ca1cd',
          '+02e6ec3941be86177bf0b998589c07da1b73e990466fdaee347c972c10f61b3797',
          '+037dcd05d921a9f2ddd11960fec2ea9904fc55cad030549a6c5f5a41b2e35e56d2',
          '+03206f7ae26f14cffb62b8c28b5e632952cdeb84b7c74ac0c2198b08bd84ee4f23'
        ]
      }
    },
    confirmations: 1091040
  }
})

describe('MultiSignatureHandler', () => {
  it('should be instantiated', () => {
    expect(handler.constructor.name).toBe('MultiSignatureHandler')
  })

  describe('canApply', () => {
    it('should be a function', () => {
      expect(handler.canApply).toBeFunction()
    })

    it('should be ok', () => {
      delete wallet.multisignature

      expect(handler.canApply(wallet, transaction)).toBeTruthy()
    })

    it('should not be ok', () => {
      wallet.multisignature = multisignatureTest

      expect(handler.canApply(wallet, transaction)).toBeFalsy()
    })
  })

  describe('apply', () => {
    it('should be a function', () => {
      expect(handler.apply).toBeFunction()
    })

    it('should be ok', () => {
      wallet.multisignature = null

      expect(wallet.multisignature).toBeNull()

      handler.apply(wallet, transaction)

      expect(wallet.multisignature).toEqual(transaction.asset.multisignature)
    })
  })

  describe('revert', () => {
    it('should be a function', () => {
      expect(handler.revert).toBeFunction()
    })

    it('should be ok', () => {
      handler.revert(wallet, transaction)

      expect(wallet.multisignature).toBeNull()
    })
  })
})
