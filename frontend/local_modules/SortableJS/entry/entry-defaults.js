import Sortable from '../src/Sortable.js';
import AutoScroll from '../plugins/AutoScroll/index.js';
import { RemoveOnSpill, RevertOnSpill } from '../plugins/OnSpill/index.js';
// Extra
import Swap from '../plugins/Swap/index.js';
import MultiDrag from '../plugins/MultiDrag/index.js';

Sortable.mount(new AutoScroll());
Sortable.mount(RemoveOnSpill, RevertOnSpill);

export default Sortable;

export {
	Sortable,

	// Extra
	Swap,
	MultiDrag
};
