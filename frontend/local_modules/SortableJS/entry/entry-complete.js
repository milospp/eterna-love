import Sortable from './entry-defaults.js';
import Swap from '../plugins/Swap/index.js';
import MultiDrag from '../plugins/MultiDrag/index.js';

Sortable.mount(new Swap());
Sortable.mount(new MultiDrag());

export default Sortable;
