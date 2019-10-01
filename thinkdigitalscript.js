function attackHook(attacker, victim) {
  if (attacker == Player.getEntity()) {
    clientMessage("Sir, you shouldn't attack others.");
  } else {
    clientMessage("Sir, you are under attack!");
  }
}

function blockEventHook(x, y, z, eventType, data) {
    if (data === 1) {
      clientMessage("A chest was opened at location " + x + " : " + y + " : " + z);
    } else if (data === 0) {
      clientMessage("The chest has been closed");
    }
  }

  function chatHook(str) {
    clientMessage(ChatColor.RED + str);
  }

  // shame on you!
function deathHook(attacker, victim) {
    if (Player.getEntity() == attacker) {
      clientMessage("How could you?!");
    }
  }

  function modTick() {
    if (Player.getHunger() < 5) {
      clientMessage(ChatColor.RED + "Warning! You are getting very hungry!");
    }
  }