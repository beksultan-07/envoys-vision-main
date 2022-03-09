import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Flex } from '../../uikit/uikit'

function News() {
  return (
    <Container>
        <Flex direction='column' margin='20px 0'>
            <Link to='dividendcalendar'>Dividend Calendar</Link>
            <Link to='earningcalendar'>Earning Calendar</Link>
        </Flex>
        <Flex direction='column'>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dignissimos repellendus? Voluptas, est? Cum consectetur ducimus ex obcaecati amet asperiores officiis laudantium ab blanditiis maxime pariatur dolore et nisi velit aperiam, vitae quasi aliquid suscipit. Culpa, animi! Assumenda magnam, possimus est, magni nisi labore laboriosam fugiat atque, suscipit veritatis saepe. Sapiente adipisci temporibus quae? Provident ipsam architecto impedit, obcaecati corrupti animi. Nobis fugit tempora libero distinctio impedit quia praesentium corporis quas? Laboriosam quos tempore omnis praesentium, ab nostrum dolorum modi nihil nam in maxime reiciendis distinctio ipsum, molestias dignissimos? Sunt cum quisquam assumenda quidem corrupti, ratione nihil est labore accusantium nemo aspernatur, nesciunt voluptatem eum voluptas eligendi incidunt consequuntur obcaecati, officiis architecto ex nisi tenetur amet. Molestiae recusandae unde quod sunt velit mollitia non pariatur iure incidunt praesentium doloremque nesciunt, nisi nam minus quidem minima? Hic amet consequuntur odit tenetur nostrum architecto explicabo? Odio animi unde magni eligendi quibusdam. Reprehenderit nihil dicta magnam assumenda quod quidem quos corporis numquam expedita. Nobis aperiam quidem saepe facere eum veritatis fuga consectetur vitae perferendis quis nihil enim ipsum, dignissimos consequatur officia quas recusandae doloremque quod reprehenderit unde natus blanditiis. Quas, quae incidunt laborum recusandae aspernatur quibusdam sapiente eos voluptas rerum cum dolor earum, nulla eaque deserunt, fuga dicta repellat! Et, repellat? Obcaecati magni, commodi ullam quia dicta dolor voluptatibus recusandae omnis. Accusamus suscipit ipsum esse doloribus, nulla fugiat fugit at tempora quas saepe repellat corporis aperiam obcaecati beatae eaque assumenda tenetur iure incidunt, dignissimos sequi animi dolorem id? Ut est magni amet aspernatur similique odio reiciendis voluptate eum ex pariatur, corrupti dignissimos! Omnis, incidunt, hic modi nisi reiciendis, culpa atque molestias repellat praesentium explicabo doloremque? Libero nobis autem asperiores quaerat, accusantium repudiandae omnis minima amet ducimus temporibus deserunt laboriosam similique obcaecati cumque odio impedit officia provident expedita reprehenderit quasi consequatur. Itaque, incidunt eligendi.</p>
        </Flex>
    </Container>
  )
}

export default News