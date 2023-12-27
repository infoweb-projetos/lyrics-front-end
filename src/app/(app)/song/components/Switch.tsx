'use client'

import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

interface ControlledSwitchesProps {
    onSwitchChange: () => void;
}

export default function ControlledSwitches({ onSwitchChange }: ControlledSwitchesProps) {
    const [checked, setChecked] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        onSwitchChange();
    };

    return (
        <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}