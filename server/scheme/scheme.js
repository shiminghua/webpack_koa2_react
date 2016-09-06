import validator from 'validator';
import crypto from 'crypto';

const SchemeConfig = {
    '/(.*)': {
        'request': {
            // 'header.version': /^[0-9]+$/
            // 'header': {
            //     'version': /^[0-9]+$/
            // }
        }
    },
    'GET /test': {
        'response': {
            // 'state.title': /^[a-zA-Z0-9]{12}$/
        }
    },
    'GET /test/:id': {
        'response': {
            // 'body': {
            //     'title': /^[a-zA-Z0-9]{12}$/
            // }
        }
    },
    'POST /test': {
        'request': {
            'body': {
                'id': /^[0-9]+$/
            }
        }
    }
};

export default SchemeConfig;