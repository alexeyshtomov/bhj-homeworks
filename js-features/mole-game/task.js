(() => {
    let playing = true,
      activeHole = 1,
      deadCount = 0,
      lostCount = 0;
  
    const stop = () => playing = false,
      getHole = index => document.getElementById(`hole${index}`),
      deactivateHole = index =>
        getHole(index).className = 'hole',
      activateHole = index =>
        getHole(index).className = 'hole hole_has-mole',
      updateStats = () => {
        document.getElementById("dead").textContent = deadCount;
        document.getElementById("lost").textContent = lostCount;
      },
      handleClick = () => {
        if (!playing) {
          return;
        }
        if (getHole(activeHole).classList.contains('hole_has-mole')) {
          deadCount++;
        } else {
          lostCount++;
        }
        updateStats();
      },
      next = () => setTimeout(() => {
        if (!playing) {
          return;
        }
        deactivateHole(activeHole);
        activeHole = Math.floor(1 + Math.random() * 9);
        activateHole(activeHole);
        next();
      }, 800);
  
    
    for (let i = 1; i <= 9; i++) {
      getHole(i).addEventListener("click", handleClick);
    }
  
    next();
  })();