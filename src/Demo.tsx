import { Box } from '@mantine/core';

function Demo() {
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
                textAlign: 'center',
                padding: theme.spacing.xl,
                borderRadius: theme.radius.xl,
                cursor: 'pointer',
                marginTop : theme.spacing.xl,
                height:500,
                width :200,

                '&:hover': {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[5],
                },
            })}
           >
            Box lets you add inline styles with sx prop
        </Box>
    );
}
export default  Demo