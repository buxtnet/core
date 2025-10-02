<?php 
namespace Buxt\Action;

class BX_Chapter { 
    public function __construct() {
        if (!in_array(_BUXTT, ['_bxmanga'])) {
            return;
        }
    }
    
}
