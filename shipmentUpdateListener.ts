import ShipmentSearchIndex from './shipmentSearchIndex';
import ShipmentUpdateListenerInterface from './ShipmentUpdateListenerInterface';
import Helper from './Helper';

class ShipmentListener extends ShipmentSearchIndex implements ShipmentUpdateListenerInterface {
  /**
   *
   *
   * @param {string} id
   * @param {*} shipmentData
   * @memberof ShipmentListener
   */
  async receiveUpdate(id: string, shipmentData: any) {
    if (Helper.chekId(id))
    {
      await this.updateShipment(id, shipmentData);
    }
  
  }

}


