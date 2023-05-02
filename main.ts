lcd1602.setAddress(
lcd1602.I2C_ADDR.addr3
)
lcd1602.putString(
"ArcBot",
3,
0
)
lcd1602.set_LCD_Show(lcd1602.visibled.visible)
lcd1602.set_backlight(lcd1602.on_off.on)
let val = 0
basic.forever(function () {
    val += 1
    lcd1602.putNumber(
    val,
    7,
    1
    )
    basic.pause(1000)
})
