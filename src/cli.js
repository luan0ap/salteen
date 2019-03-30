var lib = require('../dist/salteen.min.js')
var parameters = process.argv

function main (key, type, hashs) {
  function helper () {
    console.log('Usage: node cli.js [key] [options] [hash]')
    console.log('')
    console.log('Options:')
    console.log('  --encrypt      Encrypt your string')
    console.log('  --decrypt      Decrypt your string')
    console.log('')
    console.log('P.S: Key is your pass for encrypt or decrypt hashes')

  }

  var execute = {
    '--help': function () {
      helper()
    },
    '--encrypt': function () {
      console.log('\n[ENCRYPTED]: %s\n', lib.encrypt(key)(hashs.join(' ')))
    },

    '--decrypt': function () {
      console.log('\n[DECRYPTED]: %s\n', lib.decrypt(key)(hashs.join(' ')))
    }
  }
  

  return ( execute[type] || helper )()
}

module.exports = main(parameters[2], parameters[3], parameters.slice(4))