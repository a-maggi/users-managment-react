# Custom Input with statefull datalist

The objective is to perform a control that takes care of connecting to an API and allows to select users, adding them to a list.

The component must display a list of users from this API: https://randomuser.me/, store them and filter them in frontend according to the user input.

The field entry will be validated in the focus of the field, pressing [ENTER] or clicking on an item in the expandable list, then it will be added to the list of results and close the expandable list.

If the input in the field is not accurate, an error message should appear indicating that the string is not in the expandable list.

The selected elements must constitute a result list with the selection, and at the same time be shown in the expandable list with some trait that identifies their condition and prevents their re-selection.

The expandable list must contain loading states (you can force this visualization by recreating a loading time) and empty query state.

The general behavior of the component you want to recreate is that of a `<input />` with a datalist, when you make focus it allows to write, once you press a key the list appears. When an option is selected from the list or by input (only if that matches the string with a list element that was not previously selected), its added to the list of results.

The list of results must have a counter of elements and its elements must be able to be removed from each one.