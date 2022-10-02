import { StarIcon } from "@chakra-ui/icons"
import { Box, Button, Container, Image } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { Badge } from "reactstrap"

function AirbnbCarde() {
  const navigate=useNavigate();
    const property1 = [
        {
      imageUrl: 'https://img.naukimg.com/logo_images/groups/v1/4602035.gif',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      description:"software devlopment and technology services firm.",
      title: 'ITC Infotech',
      formattedPrice: '$1,900.00',
      reviewCount: 959,
      rating: 4,
    },
    {
        imageUrl: 'https://img.naukimg.com/logo_images/groups/v1/3655846.gif',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        description:"Leader in material engineering solution.",
        title: 'Ivalua',
        formattedPrice: '$1,900.00',
        reviewCount: 439,
        rating: 4.2,
      },
      {
        imageUrl: 'https://img.naukimg.com/logo_images/groups/v1/4656341.gif',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        description:"Digital transformation service provider",
        title: 'Highradius',
        formattedPrice: '$1,900.00',
        reviewCount: 665,
        rating: 4.6,
      },
      {
        imageUrl: 'https://img.naukimg.com/logo_images/groups/v1/508906.gif',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        description:"Leading the #Fintech evolution",
        title: 'Netapp',
        formattedPrice: '$1,900.00',
        reviewCount: 797,
        rating: 3.1,
      },
      {
        imageUrl: 'https://img.naukimg.com/logo_images/groups/v1/6293025.gif',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        description:"Leader in financial services",
        title: 'Aap global c..',
        formattedPrice: '$1,900.00',
        reviewCount: 256,
        rating: 4.8,
      }

]
// console.log(property1);
  
    return (
       <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",width:"75%",margin:"auto",height:"300px",marginBottom:"0px"}}>
        {property1.map((property)=>{
            return (
                <div><Box width="230px" height="400xp" border="1px solid #EAF1F5" borderRadius='lg' overflow='hidden' _hover={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                <Image boxSize="40px"  src={property.imageUrl} margin="auto" marginTop="20px" alt={property.imageAlt} />
          
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
                  <Button marginTop="20px" colorScheme='teal' variant='solid' style={{padding: "11px 20px",color: "#457EFF",fontWeight: "600",backgroundColor: "#F1F5FF"}} _hover={{color:"black"}} onClick={()=>{navigate("/searchresults")}}>View jobs</Button>
                  </Box>
                </Box>
              </Box>
              </div>
            )
        })}
      
         
       </div>
      
    )
  }

  function AirbnbCardef(){
    const navigate=useNavigate();
    const property1 = [
        {
      imageUrl: 'https://img.naukimg.com/logo_images/groups/v1/4658599.gif',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      description:"software devlopment and technology services firm.",
      title: 'Pubmatic',
      formattedPrice: '$1,900.00',
      reviewCount: 765,
      rating: 4,
    },
    {
        imageUrl: 'https://img.naukimg.com/logo_images/groups/v1/219216.gif',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        description:"Import and export",
        title: 'Shahi',
        formattedPrice: '$1,900.00',
        reviewCount: 345,
        rating: 4.2,
      },
      {
        imageUrl: 'https://img.naukimg.com/logo_images/groups/v1/12466.gif',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        description:"Digital transformation service provider",
        title: 'Hexaware technologies',
        formattedPrice: '$1,900.00',
        reviewCount: 445,
        rating: 4.6,
      },
      {
        imageUrl: 'https://img.naukimg.com/logo_images/groups/v1/29798.gif',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        description:"Leading the #Fintech evolution",
        title: 'Reliance',
        formattedPrice: '$1,900.00',
        reviewCount: 634,
        rating: 4.1,
      },
      {
        imageUrl: 'https://img.naukimg.com/logo_images/groups/v1/235458.gif',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        description:"Leader in financial services",
        title: 'Welspun',
        formattedPrice: '$1,900.00',
        reviewCount: 566,
        rating: 4.8,
      }

]
// console.log(property1);
  
    return (
       <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",width:"75%",margin:"auto",height:"300px"}}>
        {property1.map((property)=>{
            return (
                <div><Box width="230px" height="400xp" border="1px solid #EAF1F5" borderRadius='lg' overflow='hidden' _hover={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                <Image boxSize="40px"  src={property.imageUrl} margin="auto" marginTop="20px" alt={property.imageAlt} />
          
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
                  <Button marginTop="20px" colorScheme='teal' variant='solid' style={{padding: "11px 20px",color: "#457EFF",fontWeight: "600",backgroundColor: "#F1F5FF"}} _hover={{color:"black"}} onClick={()=>{navigate("/searchresults")}}>View jobs</Button>
                  </Box>
                </Box>
              </Box>
              </div>
            )
        })}
      
         
       </div>
      
    )
  }

export default function SponsoredCompanies(){
   return (
    <>
    <h1 style={{fontSize:"28px",fontWeight:"700",marginBottom:"30px",marginTop:"30px"}}>Sponsonserd Companies</h1>

    <AirbnbCarde/>
    <AirbnbCardef/>

    <Image src="https://i.postimg.cc/nzH1QQfn/captured1.jpg" style={{marginTop:"30px",marginBottom:"30px"}} width="75%" margin="auto"/>

    </>
   )
}