let LFSR = 0
let LFSL = 0
// 90 Degree Turn
function HardLeft () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 60)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
    basic.pause(100)
}
// 90 Degree Turn
function HardRight () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 60)
    basic.pause(100)
}
function Straight () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
}
function SoftRight () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
}
function Stop () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
}
function SoftLeft () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
}
basic.forever(function () {
    LFSR = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    LFSL = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    if (LFSL == 1 && LFSR == 1) {
        Straight()
    } else if (LFSR == 1) {
        SoftLeft()
    } else if (LFSL == 1) {
        SoftRight()
    } else {
        Straight()
    }
})
