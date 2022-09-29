import { StarIcon } from "@chakra-ui/icons"
import { Box, Button, Container, Image } from "@chakra-ui/react"
import { Badge } from "reactstrap"

function AirbnbCard() {
    const property1 = [
        {
      imageUrl: 'https://img.naukimg.com/logo_images/groups/v2/2436002.gif',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      description:"software devlopment and technology services firm.",
      title: 'Xorient',
      formattedPrice: '$1,900.00',
      reviewCount: 959,
      rating: 4,
    },
    {
        imageUrl: 'https://img.naukimg.com/logo_images/groups/v2/1574056.gif',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        description:"Leader in material engineering solution.",
        title: 'Applied materials',
        formattedPrice: '$1,900.00',
        reviewCount: 439,
        rating: 4.2,
      },
      {
        imageUrl: 'https://img.naukimg.com/logo_images/groups/v2/4577755.gif',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        description:"Digital transformation service provider",
        title: 'Accolite digital',
        formattedPrice: '$1,900.00',
        reviewCount: 665,
        rating: 4.6,
      },
      {
        imageUrl: 'https://img.naukimg.com/logo_images/groups/v2/4582763.gif',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        description:"Leading the #Fintech evolution",
        title: 'Biz2Credit',
        formattedPrice: '$1,900.00',
        reviewCount: 797,
        rating: 3.1,
      },
      {
        imageUrl: 'https://img.naukimg.com/logo_images/groups/v2/240936.gif',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        description:"Leader in financial services",
        title: 'JP Morgan chase bank',
        formattedPrice: '$1,900.00',
        reviewCount: 256,
        rating: 4.8,
      }

]
// console.log(property1);
  
    return (
       <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",width:"75%",margin:"auto",height:"400px"}}>
        {property1.map((property)=>{
            return (
                <div><Box width="230px" height="400xp" border="1px solid #EAF1F5" borderRadius='lg' overflow='hidden' _hover={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                <Image  src={property.imageUrl} margin="auto" marginTop="20px" alt={property.imageAlt} />
          
                <Box p='6'>
          
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                  >
                    {property.title}
                  </Box>
          
                  <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? 'gold' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                  <Container style={{color: "#8292B4",fontSize:"13px",textAlign: "center",marginTop:"20px"}}>
                    {property.description}
                  </Container>
                  <Box>
                  <Button marginTop="20px" colorScheme='teal' variant='solid' style={{padding: "11px 20px",color: "#457EFF",fontWeight: "600",backgroundColor: "#F1F5FF"}} _hover={{color:"black"}}>View jobs</Button>
                  </Box>
                </Box>
              </Box>
              </div>
            )
        })}
      
         
       </div>
      
    )
  }

export default function FeaturedCompaniesActivelyHiring(){
   return (
    <>
    <h1 style={{fontSize:"28px",fontWeight:"700",marginBottom:"0px"}}>Featured companies actively hiring</h1>

    <AirbnbCard/>

    </>
   )
}