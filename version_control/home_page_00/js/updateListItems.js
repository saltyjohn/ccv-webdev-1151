// Function to append 'Assignment not completed' element to assignments not yet posted
function updateListItems(obj) {

  // loop through 'li's in 'ul' with id="assignment-links"
  for (link in obj) {
    const anchorNode = obj[link];
    const linkParent = anchorNode.parentElement;

    console.log(link, anchorNode)

    // skip node value of link
    if (link === 'length') {
      console.log(`Skipped ${link} value in node object.`)
      break
    }



    // if link does not yet exist, append :
    if (anchorNode.getAttribute("href").charAt(0) === "#") {

      createNodeWithAttributes(
        linkParent,
        'p',
        '{** Assignment not yet completed}',
        'assignment-not-completed-text',
        'append'
      );

    } else {
      // Change color of left border to active-color
      linkParent.classList.add('item-active')
    }

    // Custom Bullet mark
    createNodeWithAttributes(
      linkParent,
      'div',
      '>>',
      'link-bullet',
      'prepend'
    );

  }
}

// Extracted function for node creation
function createNodeWithAttributes(targetNode, el, text, className, pend) {
  const newNode = document.createElement(el);

  newNode.innerHTML = text;
  newNode.classList.add(className)

  if (pend === 'prepend') {
    targetNode.prepend(newNode);
  }

  else if (pend === 'append') {
    targetNode.append(newNode);
  }

  else {
    console.log(`Error: Could not add class '${className}' to target. Node setting '${pend}' not understood.`);
  }
}

updateListItems(assignmentLinks)
