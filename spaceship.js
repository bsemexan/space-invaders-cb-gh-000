class Spaceship {
  constructor(name, crew, phasers, shields, cloaked, warpDrive, docked, phasersCharge) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false;
    this.warpDrive = "disengaged"
    this.docked = docked
    this.phasersCharge = "uncharged"
  }
}
