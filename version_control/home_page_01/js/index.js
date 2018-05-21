const assignmentListItems = document.getElementById('assignments-list').childNodes;

// (..., 'nodeType', 1, ...) => to target element nodes only
filterChildNodes(
  assignmentListItems,
  'nodeType',
  1,
  updateListItems
);


// Function to append 'Assignment not yet completed' element to assignments with any missing links
function updateListItems(obj) {
  // Custom Bullet mark
  createNewNode(
    obj,
    'div',
    '>',
    'link-bullet',
    'prepend'
  );

  const listItems = obj.children;
  let anchorChildren = [];

  // Find all anchor tags,
  filterChildNodes(
    listItems,
    'nodeName',
    'A',
    pushToArray,
    [anchorChildren]
  );

  // check if any links are set to "#"
  let linksActive = true;
  anchorChildren.forEach(link => {
    if (link.getAttribute('href') === '#') {
      linksActive = false
    }
  });

  // Change color elements to active color scheme
  if (linksActive) {
    obj.classList.add('item-active')

    /**
     * =================================================================
     * TODO: update dynamic bullet-mark to change background when active
     * =================================================================
     */

  } else {
    // Append message
    createNewNode(
      obj,
      'p',
      '{** Assignment not yet completed}',
      'assignment-not-completed-text',
      'append'
    );
  }
}


/**
 * Extracted function for node filtering
 * ==> there may be a Node.method() that could do this...?
 * TODO: Naming convention could use an update
 *   considering a callback is applied to the filtered nodes.
 */
function filterChildNodes(nodes, filter, filterVal, callback, args=[]) {
  for (element in nodes) {
    const targetElement = nodes[element];
    if (targetElement[filter] === filterVal) {
      callback(targetElement, ...args);
    }
  }
}


/**
 * Callback to handle anchor filter in updateListItems()
 */
function pushToArray(node, array) {
  array.push(node);
}

/**
 * Callback to handle bulletMark assignment
*/
function assignToVariable(node, variable) {
  variable = node;
}


// Extracted function for node creation
function createNewNode(targetNode, el, text, className, pend) {
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
