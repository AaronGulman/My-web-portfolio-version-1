document.addEventListener('DOMContentLoaded', function () {
	const codeLinesContainer = document.querySelector('.code-lines-container');
      
	function createCodeLine() {
	  const codeLine = document.createElement('div');
	  codeLine.className = 'code-line';
	  codeLinesContainer.appendChild(codeLine);
      
	  const startX = Math.random() * window.innerWidth;
	  const startY = Math.random() * window.innerHeight;
	  codeLine.style.left = startX + 'px';
	  codeLine.style.top = startY + 'px';
      
	  // Set random length for the code line
	  const lineLength = Math.random() * 20 + 5;
	  codeLine.style.width = lineLength + 'px';
      
	  // Remove the element after animation ends
	  codeLine.addEventListener('animationend', () => {
	    codeLine.remove();
	  });
	}
      
	// Create multiple code lines at intervals
	setInterval(createCodeLine, 50); // Adjust the interval as needed
      });
     
      