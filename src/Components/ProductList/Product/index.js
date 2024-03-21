import { Avatar, Badge, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import './Product.css';
import { Circle } from '@mui/icons-material';

const Product = () => {


    return (
        <>
            <Card sx={{ display: 'flex', width: 400, height: 70, justifyContent: 'space-between' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 55, height: 55, alignSelf: 'center', marginLeft: 1 }}
                    image="https://github.com/miithersz.png"
                />
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h6">
                            Colar
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary" component="div">
                            Vermelho e verde
                        </Typography>
                    </CardContent>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography>
                        R$39,99
                    </Typography>
                    <IconButton>
                        <Circle fontSize="large" sx={{ color: '#F00' }} />
                    </IconButton>
                </Box>
            </Card>
        </>
    );
}

export default Product;