import {Alert} from '@mantine/core';
import {AlertCircle} from 'tabler-icons-react';

function Demo() {
    return (
        <Alert icon={<AlertCircle size={16}/>} title="Bummer!" withCloseButton variant="outline">
            Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
        </Alert>
    );
}

export default Demo;