class Backpack {
    constructor ( //Constructor is a method used to define all parameters of the backpack
        name,
        volume,
        color,
        pocketNum,
        strapLenghtL,
        strapLenghtR,
        lidOpen,
        dateAcquired
  ){
    // and then define the properties of these parameters
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength ={
        left : strapLenghtL,
        right : strapLenghtR,
    };
    this.lidOpen = lidOpen;
    this.dateAcquired = dateAcquired;
  }

  toggleLid(lidStatus){
    this.lidOpen = lidStatus; 
  }
  newStrapLength(lengthLeft, lengthRight){
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
  backpackAge(){
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired;
    let daySinceAcquired = Math.floor(elapsed/(1000 * 3600 * 24));
    return daySinceAcquired;
  }
}
export default Backpack;