export class Order {
  id : number;
  firstName : string;
  middleName : string;
  lastName : string;
  email : string;
  contactAreaCode: string;
  contactNumber: string;
  billingStreet1 : string;
  billingStreet2 : string;
  billingCity : string;
  billingState : string;
  billingZipCode : string;
  billingCountry : string;
  productName: string;
  orderComment : string;

  createdBy : string;
  updatedBy : string;
  createdTAD : string;
  updatedTAD : string;
  emailSent : boolean;
  emailSentTAD : string;

  constructor(){}
  /*

  constructor (
    public id: number,
    public firstName: string,
    public lastName: string,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {
  }
  */

}
