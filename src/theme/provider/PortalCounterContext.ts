import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

const PortalCounterContext = createContext<Partial<[number, Dispatch<SetStateAction<number>>]>>([]);

export default PortalCounterContext;
