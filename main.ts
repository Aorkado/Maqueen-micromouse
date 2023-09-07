let distance = maqueen.Ultrasonic(PingUnit.Centimeters)
let minDistance = distance
let minDistanceCal = (18 - 8.5) / 2
let verifiedCalibration = 0
while (minDistance != distance) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 10)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 10)
}
maqueen.motorStop(maqueen.Motors.All)
while (verifiedCalibration != 1) {
    if (distance > 18) {
        verifiedCalibration = 1
    } else if (distance > minDistanceCal) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 10)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        verifiedCalibration = 1
    }
}
while (minDistance > distance) {
    minDistance = distance
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
}
maqueen.motorStop(maqueen.Motors.All)
