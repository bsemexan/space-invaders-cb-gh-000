class CrewMember {
  constructor(position){
    this.position = position
    this.currentShip = "Looking for a Rig"
  }

  chargePhasers(){}

  engageWarpDrive(){
    return this.position === "Pilot" && this.currentShip !== "Looking for a Rig"
      ? (this.currentShip.warpDrive = "engaged")
      : "had no effect";
  }

  setsInvisibility(){}
}
