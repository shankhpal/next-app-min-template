'use client'
import { Image, Text, Group, Button, Anchor, Paper, Tooltip } from '@mantine/core';
import { IconAt, IconPhoneCall, IconWorld, IconUserPlus, IconUserMinus, IconTrash, IconStar } from '@tabler/icons-react';
import { useState } from 'react';
import { UserObj } from '../interfaces';
interface Props {
    user:UserObj,
    deleteUser:(id:number) => void,
    classes:{
        readonly [key: string]: string
    }
}

export function User(props:Props) {
    let user = props.user;
    const [isClicked, setIsClicked] = useState(false)
    return (
        user && <Paper withBorder shadow='md' radius="md" p={'lg'}>
            <Tooltip label={user.name} withArrow>
                <Anchor className={props.classes.imageAnchor} href={`https://${user.website}`} target='_blank'>
                    <Image className={props.classes.image} src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} alt={user.name} />
                </Anchor>
            </Tooltip>
            <Text fz={'lg'} className={props.classes.text}>{user.name} {isClicked ? <IconStar size={'1rem'} /> : ''}</Text>
            <Group className={props.classes.info}>
                <IconAt size={'1rem'} className={props.classes.icon} strokeWidth={'1.5'}></IconAt>
                <Anchor fz={'1rem'} className={props.classes.anchor} href={`mailto:${user.email}`}>{user.email}</Anchor>
            </Group>
            <Group className={props.classes.info}>
                <IconPhoneCall size={'1rem'} className={props.classes.icon} strokeWidth={'1.5'}></IconPhoneCall>
                <Anchor fz={'1rem'} className={props.classes.anchor} href={`tel:${user.phone}`}>{user.phone}</Anchor>
            </Group>
            <Group className={props.classes.info}>
                <IconWorld size={'1rem'} className={props.classes.icon} strokeWidth={'1.5'}></IconWorld>
                <Anchor fz={'1rem'} className={props.classes.anchor} href={`https://${user.website}`} target='_blank'>{user.website}</Anchor>
            </Group>

            <Group gap={'0.3125rem'} mt={15}>
                <Button variant={!isClicked ? 'primary' : 'default'} leftSection={!isClicked ? <IconUserPlus size={'1rem'} /> : <IconUserMinus size={'1rem'} />} className={props.classes.button} onClick={() => setIsClicked(!isClicked)}>
                    {!isClicked ? 'Follow' : 'Unfollow'}
                </Button>

                <Button variant='outline' leftSection={<IconTrash size={'1rem'} />} className={props.classes.button} onClick={() => props.deleteUser(user.id)} >
                    Delete
                </Button>
            </Group>
        </Paper>
    );
}

export default User;