const initialHTML = `
<p>So, I went back and read the instructions myself to see what I'd done wrong. They said:</p>

<blockquote>
  <p>Remove the tray from the box. Pierce the overwrap several times with a fork and cook on High for 15 minutes, rotating
    it half way through.</p>
</blockquote>

<p>I thought he'd told me
  <em>fifty</em>. No wonder it exploded in my microwave.</p>
`

// Function to highlight input text
const highlightSelectedText = () => {
  const initQuery = document.getElementById('query-field')
  const search = document.getElementById('search-input').value;
  const pNodes = document.getElementsByTagName('p');

  // Reset for backspace keypress
  initQuery.innerHTML = initialHTML;

  // Create new RegEx out of input
  const searchRegex = new RegExp(search);

  // Loop through paragraph elements
  for (let i in pNodes) {
    const node = pNodes[i];
    // If nodeType is an element,
    // search is not an empty string,
    // and the search returns a match index
    if (
      node.nodeType === 1 &&
      node.innerHTML.search(searchRegex) !== -1 &&
      search !== ''
    ) {
      node.innerHTML = node.innerHTML.split(searchRegex).join(`<mark>${search}</mark>`)
    }
  }
}

// for initial load and default text value 'and'
highlightSelectedText()
