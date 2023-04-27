import React from 'react';
import mostPopularJson from '../assets/cmc-test-most-popular-feed.json'

export const MostPopularTable = () =>
{
  return(
  <div class='text-cmc-text text-sm p-8 overflow-auto relative'>
    <table class='table-fixed border-b w-full'>
        <thead class='text-base'>
            <tr>
                <th class="py-2 px-3 border-b text-left">
                Instruments   
                </th>
                <th class="py-2 px-3 border-b text-left">
                Min Spread  
                </th>
                <th class="py-2 px-3 border-b text-left">
                Day  
                </th>
                <th class="py-2 px-3 border-b text-left">  
                </th>
            </tr>
        </thead>
    <tbody class="divide-y divide-solid">
    {Object.keys(mostPopularJson).map((key,i)=>(
        <tr>
            <td class="py-2 px-3 text-left">
                <p key={key}>
                    <span class='text-cmc-text'>{mostPopularJson[key].name}</span>
                </p>
            </td>
            <td class="py-2 px-3 text-left">
                <p key={key}>
                    <span class='text-cmc-text'>{mostPopularJson[key].spread}</span>
                </p>
            </td>
            <td class="py-2 px-3 text-left">
                <p key={key}>
                    <span class='text-cmc-text'>{mostPopularJson[key].day.movement}</span>
                </p>
            </td>
                <td class="py-2 px-3 text-left">
            </td>
        </tr>
    ))}
    </tbody>
    </table>
    </div>
  );
};