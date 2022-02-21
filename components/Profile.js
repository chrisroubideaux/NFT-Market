import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useWeb3 } from '@3rdweb/hooks';
import { client } from '../lib/sanityClient';
import { ThirdwebSDK } from '@3rdweb/sdk';

function Profile() {
  const router = useRouter();
  const [collection, setCollection] = useState({});
  const { collectionId } = router.query;

  const fetchCollectionData = async (sanityClient = client) => {
    const query = `*[_type == "marketItems" && contractAddress == "${collectionId}" ] {
      "imageUrl": profileImage.asset->url,
      "bannerImageUrl": bannerImage.asset->url,
      volumeTraded,
      createdBy,
      contractAddress,
      "creator": createdBy->userName,
      title, floorPrice,
      "allOwners": owners[]->,
      description
    }`;

    const collectionData = await sanityClient.fetch(query);

    console.log(collectionData, '🔥');

    await setCollection(collectionData[0]);
  };

  useEffect(() => {
    fetchCollectionData();
  }, [collectionId]);

  return (
    <div className="container text-center">
      <div className="container-fluid pb-5">
        <h2>Profile</h2>
        <img
          src={
            collection?.imageUrl
              ? collection.imageUrl
              : 'https://via.placeholder.com/200'
          }
          className="profile"
          alt="..."
        />
      </div>
    </div>
  );
}

export default Profile;
