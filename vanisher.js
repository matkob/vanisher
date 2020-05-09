var cleaningMode = false

browser.commands.onCommand.addListener(command => {
    switch(command) {
        case "toggle_mode":
            cleaningMode = !cleaningMode;
            console.log('cleaning mode', cleaningMode)
            break
    }
  })