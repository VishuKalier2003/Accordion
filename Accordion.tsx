import { useContext } from 'react';
import { ThemeContext } from './Theme';

export const Accordion = () => {
    const theme = useContext(ThemeContext);
    return (
        <div style={{flexDirection: 'column',
                    flex: '1 1 100%',
                    display: theme.primary.display,}}>
            <div style={
                {
                    border: theme.primary.border,
                    justifyContent: theme.primary.align_items,
                    position: 'relative',
                    padding: theme.primary.space,
                    margin: theme.primary.space,
                    fontSize: theme.fonts.size,
                    color: theme.fonts.color,
                    fontWeight: theme.fonts.weight,
                }
            }>Name</div>
            <div style={
                {
                    border: theme.primary.border,
                    justifyContent: theme.primary.align_items,
                    position: 'relative',
                    padding: theme.primary.space,
                    margin: theme.primary.space,
                }
            }>Address</div>
            <div style={
                {
                    border: theme.primary.border,
                    justifyContent: theme.primary.align_items,
                    position: 'relative',
                    padding: theme.primary.space,
                    margin: theme.primary.space,
                }
            }>Email</div>
            <div style={
                {
                    border: theme.primary.border,
                    justifyContent: theme.primary.align_items,
                    position: 'relative',
                    padding: theme.primary.space,
                    margin: theme.primary.space,
                }
            }>Phone</div>
        </div>
    )
}