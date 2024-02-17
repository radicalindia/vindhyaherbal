import theme from "./theme";

export const  globalStyles = {
    rowflex:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        width:"100%"
    },
    searchBox: {
        backgroundColor: 'white',
      
        opacity:.8,
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 7,
        alignItems: 'center',
        elevation:3,
      },
    rowflex2:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"

    },
    globalFontFamily:{
      fontFamily:"",
    },
    text:{
      color:"black",
      fontFamily:"",
      fontSize:16,
      fontWeight:"bold"
    },
    text2:{
        color:"black",
        fontFamily:"",
        fontSize:13,
        // fontWeight:"bold"
      },
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:theme.colors.whiteBg,
        paddingHorizontal:30,
        paddingVertical:30
        
    },
    container2:{
        width:"100%",
        height:"100%",
        backgroundColor:theme.colors.whiteBg,
        paddingHorizontal:15,
        paddingVertical:15
        
    },
    container3:{
        width:"100%",
        height:"100%",
        backgroundColor:theme.colors.whiteBg,
        paddingHorizontal:10,
        paddingVertical:10
        
    }

}