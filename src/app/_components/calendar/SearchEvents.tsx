"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";

interface SearchEventsProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchEvents = ({ onSearch, placeholder = "Search events...", className = "" }: SearchEventsProps) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const abortControllerRef = useRef<AbortController | null>(null);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle input change with debounce
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    
    // Clear any existing timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    
    // Set a new timeout
    debounceTimeoutRef.current = setTimeout(() => {
      setDebouncedQuery(newQuery);
    }, 300); // 300ms debounce time
  };

  // Handle search execution with cancellation of previous requests
  useEffect(() => {
    // Skip empty searches
    if (debouncedQuery === "") {
      onSearch("");
      return;
    }
    
    // Cancel previous request if exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    // Create new abort controller for this request
    const currentAbortController = new AbortController();
    abortControllerRef.current = currentAbortController;
    
    const performSearch = async () => {
      try {
        // Call the onSearch prop with the query
        onSearch(debouncedQuery);
      } catch (error) {
        // Handle errors (ignore abort errors)
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Search error:', error);
        }
      }
    };
    
    performSearch();
    
    // Cleanup function
    return () => {
      if (currentAbortController) {
        currentAbortController.abort();
      }
    };
  }, [debouncedQuery, onSearch]);
  
  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search size={16} className="text-gray-400" />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white 
                  placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 
                  focus:ring-black focus:border-black sm:text-sm"
        placeholder={placeholder}
        aria-label="Search events"
      />
    </div>
  );
};

export default SearchEvents;
