import styles from '@/styles/Home.module.css'
import Link from 'next/Link';

export default function CompanyTable() {
  return (     
    <table data-aos='fade-right' class="w-full p-2 text-sm text-center text-gray-500">
        <tbody>
            <tr class="border-b">
                <th class="py-2 font-medium text-xl text-gray-900 whitespace-nowrap">
                    会社名
                </th>
                <td class="py-2 text-lg whitespace-nowrap">
                    株式会社 長町研磨
                </td>
            </tr>
            <tr class="border-b">
                <th class="py-2 font-medium text-xl text-gray-900 whitespace-nowrap">
                本社住所
                </th>
                <td class="py-2 text-lg">
                    岡山県岡山市南区新福1-8-4
                </td>
            </tr>
            <tr class="border-b">
                <th class="py-2 font-medium text-xl text-gray-900 whitespace-nowrap">
                代表者
                </th>
                <td class="py-2 text-lg">
                    長町 拓哉
                </td>
            </tr>
            <tr class="border-b">
                <th class="py-2 font-medium text-xl text-gray-900 whitespace-nowrap">
                電話番号
                </th>
                <td class="py-2 text-lg">
                    086-264-4111
                </td>
            </tr>
            <tr className='border-b'>
                <th class="py-2 font-medium text-xl text-gray-900 whitespace-nowrap">
                創業
                </th>
                <td class="py-2 text-lg">
                    1960年
                </td>
            </tr>
            <tr className='border-b'>
                <th class="py-2 font-medium text-xl text-gray-900 whitespace-nowrap">
                資本金
                </th>
                <td class="py-2 text-lg">
                    1,000万円
                </td>
            </tr>
            <tr className='border-b'>
                <th class="py-2 font-medium text-xl text-gray-900 whitespace-nowrap">
                事業内容
                </th>
                <td class="py-2 text-lg">
                裁断刃、工業刃物の再研磨<br/>
                印刷関連等の材料販売
                </td>
            </tr>
            <tr className='border-b'>
                <th class="py-2 font-medium text-xl text-gray-900 whitespace-nowrap">
                取引金融機関
                </th>
                <td class="py-2 text-lg">
                中国銀行 / 三井住友銀行 / 岡山信用金庫
                </td>
                
            </tr>
            <tr className='border-b'>
                <th class="py-2 font-medium text-xl text-gray-900 whitespace-nowrap">
                営業時間/休日
                </th>
                <td class="py-2 text-lg">
                8:30〜17:00/土日祝
                </td>
            </tr>
            <tr className='border-b'>
                <th class="py-2 font-medium text-xl text-gray-900 whitespace-nowrap">
                その他事業
                </th>
                <td class="py-2 text-lg">
                    デジタル事業
                </td>
            </tr>
        </tbody>
    </table>
  )
}