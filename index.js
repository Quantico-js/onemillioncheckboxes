function clickAllCheckboxes() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  console.log(`Found ${checkboxes.length} checkboxes`);

  // Find the last checked checkbox
  let lastCheckedIndex = -1;
  for (let i = checkboxes.length - 1; i >= 0; i--) {
    if (checkboxes[i].checked) {
      lastCheckedIndex = i;
      break;
    }
  }

  let clickedCount = lastCheckedIndex + 1;
  let lastTotal = parseInt(localStorage.getItem('lastTotal') || '0');

  console.log(`Starting from checkbox ${clickedCount + 1}`);
  console.log(`Last recorded total: ${lastTotal}`);

  function clickNext() {
    if (clickedCount < checkboxes.length) {
      const checkbox = checkboxes[clickedCount];
      if (!checkbox.checked && !checkbox.disabled) {
        checkbox.click();
        console.log(`Clicked checkbox ${clickedCount + 1}`);
      } else {
        console.log(`Skipped checkbox ${clickedCount + 1} (already checked or disabled)`);
      }
      clickedCount++;

      // Check if the total has updated
      setTimeout(() => {
        const countDisplay = document.body.innerText.match(/(\d{1,3}(,\d{3})*) boxes are ✅/);
        if (countDisplay) {
          const currentTotal = parseInt(countDisplay[1].replace(/,/g, ''));
          if (currentTotal > lastTotal) {
            lastTotal = currentTotal;
            console.log(`Count updated: ${currentTotal}`);
            // Save the new total to localStorage
            localStorage.setItem('lastTotal', lastTotal.toString());
            // Continue clicking
            setTimeout(clickNext, 100);
          } else {
            // If count hasn't updated, wait longer before next click
            setTimeout(clickNext, 500);
          }
        } else {
          console.log('Count display not found');
          setTimeout(clickNext, 500);
        }
      }, 100);
    } else {
      console.log('Finished clicking all checkboxes');
      console.log(`Final count: ${lastTotal}`);
      // Clear localStorage when finished
      localStorage.removeItem('lastTotal');
    }
  }

  clickNext();
}

clickAllCheckboxes();
