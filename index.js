function clickAllCheckboxes() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  console.log(`Found ${checkboxes.length} checkboxes`);

  let clickedCount = 0;
  let lastTotal = 0;

  function clickNext() {
    if (clickedCount < checkboxes.length) {
      const checkbox = checkboxes[clickedCount];
      if (!checkbox.checked && !checkbox.disabled) {
        checkbox.click();
        console.log(`Clicked checkbox ${clickedCount + 1}`);
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
    }
  }

  clickNext();
}

clickAllCheckboxes();
