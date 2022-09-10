import {PageReactWidgetController} from '@beyond-js/react-widgets/page';
import {Widget} from '../page';

export /*bundle*/
class Controller extends PageReactWidgetController {

    constructor(props) {
        super(props);
       // const model = new BridgeModel();
    }

    get Widget() {
        return Widget;
    }

}
