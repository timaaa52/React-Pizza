import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader: React.FC = () => (
  <ContentLoader 
    speed={0.2}
    width={300}
    height={500}
    viewBox="0 0 300 500"
    backgroundColor="#d1d1d1"
    foregroundColor="#ffffff"
  >
    <circle cx="137" cy="122" r="108" /> 
    <rect x="-2" y="255" rx="5" ry="5" width="280" height="27" /> 
    <rect x="0" y="296" rx="10" ry="10" width="280" height="84" /> 
    <rect x="128" y="400" rx="20" ry="20" width="151" height="44" /> 
    <rect x="214" y="417" rx="0" ry="0" width="6" height="10" /> 
    <rect x="0" y="400" rx="15" ry="15" width="100" height="44" />
  </ContentLoader>
)

export default MyLoader