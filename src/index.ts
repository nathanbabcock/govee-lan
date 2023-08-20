import Govee from 'govee-lan-control'
import { error, log } from 'node:console'

var govee = new Govee()

govee.on('ready', () => log('Server/client is ready!'))

govee.on('deviceAdded', device => {
  log('New Device!', device.model)
  govee.devicesArray[0].actions.setOn().catch(error)
})
